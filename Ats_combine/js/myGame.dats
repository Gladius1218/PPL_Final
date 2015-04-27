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
  val p_cooldown = ref{int}(0)
//  implement player_get() = player[]
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
in
  val () = init()
end(*local end*)

implement player_keyPress() = 
{
  val () =
    if check_key(KEY_LEFT) = 1 then player_move(~PLAYER_SPEED, 0)
  val () =
    if check_key(KEY_RIGHT) = 1 then player_move(PLAYER_SPEED, 0)
  val () =
    if check_key(KEY_UP) = 1 then player_move(0 , PLAYER_SPEED)
  val () =
    if check_key(KEY_DOWN) = 1 then player_move(0 , ~PLAYER_SPEED)
//  val () =
//    if check_key(KEY_UP) = 1 then
//      player_fire(p)
}(*player_keyPress end*)

implement player_move(x , y) = 
(
    if x = 0 then let//move y
        val cur_Y = player_getPosition_Y()
        val () = 
            if cur_Y + y > SCREEN_HEIGHT || cur_Y + y <= PLAYER_HEIGHT/2 then
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
    //val () = enemy_update(dt)
    val () = player_update(dt)
    //val () = player_bullets_update(dt)
    //val () = enemy_bullets_update(dt)
  in
    ()
  end
)(*game_tick end*)

implement player_update(dt) =
{
  //val () = player_cooldown(dt)
  val () = player_keyPress()
}



















%{$
//
function
ATS_start()
{
  var _ = my_dynload()
}
//
%}