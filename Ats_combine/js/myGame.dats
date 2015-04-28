(* ****** ****** *)

#define ATS_MAINATSFLAG 1
#define ATS_DYNLOADNAME "my_dynload"

(* ****** ****** *)
//
#include
"share/atspre_define.hats"
//
(* ****** ****** *)
//
staload "libc/SATS/math.sats"
staload "./myGame.sats"
//
(* ****** ****** *)
//
#include
"{$LIBATSCC2JS}/staloadall.hats"
//
(* ****** ****** *)
local
  val player = ref{int}(3)
  val enemy_cooldown = ref{int}(0)
  val e = store_init()
  val enemies = ref{store}(e)
  val e_cooldown = ref{int}(ENEMY_FREQ)
  val e_move = ref{int}(10)
  val enemy_interval = 50

  fun init(): void =
  {
    // Init Player
    val () = player_init()
    //  Init enemies
    //val () = init_enemies(e, ENEMY_COLUMNS, ENEMY_ROWS)
  }

  implement player_get() = 
    if player[] > 0 then let
        val() = player[] := player[] - 1
        val () = update_lives(player[])
    in 
        Some(1)
    end else let
        val () = gameover()
    in
        None()
    end

  implement enemy_get(dt) = let
    val () = e_cooldown[] := e_cooldown[] - dt
  in
    if e_cooldown[] <= 0 then let

      val () = e_cooldown[] := e_cooldown[] + ENEMY_FREQ
    in
      Some(1)
    end else None()
  end

  implement enemy_move_get(dt) = let
    val () = e_move[] := e_move[] - dt
  in
    if e_move[] <= 0 then let
      val () = e_move[] := e_move[] + 10
    in
    Some(1)
    end else None()
  end
in
  val () = init()
end(*local end*)

implement player_keyPress() = 
{
  val () =
    if check_key(KEY_LEFT) = 1 then player_move(~PLAYER_SPEED, 0.0)
  val () =
    if check_key(KEY_RIGHT) = 1 then player_move(PLAYER_SPEED, 0.0)
  val () =
    if check_key(KEY_UP) = 1 then player_move(0.0 , PLAYER_SPEED)
  val () =
    if check_key(KEY_DOWN) = 1 then player_move(0.0 , ~PLAYER_SPEED)
}(*player_keyPress end*)

implement player_move(x , y) = 
(
    if x = 0.0 then let//move y
        val cur_Y = player_getPosition_Y()
        val () = 
            if cur_Y + y > SCREEN_HEIGHT || cur_Y + y <= PLAYER_HEIGHT / 2.0 then
                ()
            else player_setPosition_Y(cur_Y + y)
    in
        ()
    end else let
        val cur_X = player_getPosition_X()
        val () = 
            if cur_X + x > (SCREEN_WIDTH - PLAYER_WIDTH/2) || cur_X + x < PLAYER_WIDTH/2 then
                ()
            else player_setPosition_X(cur_X + x)
    in
        ()
    end
)(*player_move*)

implement game_tick(dt) =
(
  let
    val () = enemy_update(dt)
    val () = score_update(dt)
    val () = player_update(dt)
    //val () = player_bullets_update(dt)
  in
    ()
  end
)(*game_tick end*)

implement player_update(dt) =
{
  val () = player_keyPress()
}(*player_update end*)

implement enemy_update(dt) =
let
  val opt = enemy_get(dt)
in
  case- opt of
  | None() => ()
  | Some(_) => let
    val enemy = create_enemy()
    val () = set_enemy_animation(enemy)
  in
    ()
  end
end

implement set_enemy_animation(enemy) = 
let 
  val player_x = player_getPosition_X()
  val player_y = player_getPosition_Y()
  val enemy_x = enemy_getPosition_X(enemy)
  val enemy_y = enemy_getPosition_Y(enemy)
  val dist_x = player_x - enemy_x
  val dist_y = player_y - enemy_y
in
    let
      val speed_x = dist_x / dist_y
      val speed_y = 1.0
      val () = test(dist_x, dist_y)
    in
      enemy_move(enemy, speed_x, speed_y, lam() => player_crash(enemy))
    end
end

implement player_crash(enemy) = let
  val() = enemy_remove(enemy)
  val opt = player_get()
in
  case opt of
  | None() => ()//gameover() already in player_get function
  | Some(_) => ()
end

implement enemy_move(enemy, speed_x, speed_y, k) = 
let
  val enemy_x = enemy_getPosition_X(enemy)
  val enemy_y = enemy_getPosition_Y(enemy)
  val enemy_x = enemy_x + speed_x
  val enemy_y = enemy_y + speed_y
  val () = enemy_setPosition(enemy, enemy_x, enemy_y)
  val crash = enemy_check_crash(enemy, enemy_x, enemy_y)
in
  case- crash of
  | 1 => k()//crash
  | 0 => let //not crash
    val check_bound = enemy_check_bound(enemy, enemy_x, enemy_y)
  in
    case- check_bound of
    | 1 => enemy_remove(enemy)//out
    | 0 => setTimeout_cloref(lam() => (enemy_move(enemy, speed_x, speed_y, k)), 5.0) //in
  end
end

implement enemy_check_crash(enemy, enemy_x, enemy_y) = let
  val player_x = player_getPosition_X()
  val player_y = player_getPosition_Y()
  val enemy_x = enemy_getPosition_X(enemy)
  val enemy_y = enemy_getPosition_Y(enemy)
  val dist = calc_dist(player_x, player_y, enemy_x, enemy_y)//sqrt((player_x - enemy_x)*(player_x - enemy_x) + (player_y - enemy_y)*(player_y - enemy_y))
  val safe_dist = (PLAYER_WIDTH + ENEMY_WIDTH) / 2.0
in
  if dist < safe_dist then 1
  else 0
end

implement enemy_check_bound(enemy, enemy_x, enemy_y) = 
  if enemy_x > SCREEN_WIDTH || enemy_x < 0.0 || enemy_y > SCREEN_HEIGHT || enemy_y < 0.0 then 1
  else 0


extern
fun
cloref_app
(
  fwork: () -<cloref1> void
) : void = "mac#" // endfun
//
implement cloref_app(fwork) = fwork()

%{$
function
ATS_start()
{
  var _ = my_dynload();
}

function
test(x, y){
  console.log(x + ", " + y);
}

function
setTimeout_cloref(fwork, ntime)
{
  setTimeout(function(){cloref_app(fwork);return;}, ntime);
}
%}