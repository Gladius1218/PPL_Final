/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-4-29: 23h:17m
**
*/

var statmp0

var statmp1

var statmp2

function
__patsfun_10__closurerize(env0)
{
  return [function(cenv) { return __patsfun_10(cenv[1]); }, env0];
}


function
__patsfun_13__closurerize(env0, env1, env2, env3)
{
  return [function(cenv) { return __patsfun_13(cenv[1], cenv[2], cenv[3], cenv[4]); }, env0, env1, env2, env3];
}


function
init()
{
//
// knd = 0
//
  // __patsflab_init
  ats2jspre_ref_set_elt(statmp0, 3);
  player_init();
  return/*_void*/;
} // end-of-function


function
player_get()
{
//
// knd = 0
  var tmpret5
  var tmp6
  var tmp7
  var tmp9
  var tmp10
  var tmp12
//
  // __patsflab_player_get
  tmp7 = ats2jspre_ref_get_elt(statmp0);
  tmp6 = ats2jspre_gt_int0_int0(tmp7, 0);
  if(tmp6) {
    tmp10 = ats2jspre_ref_get_elt(statmp0);
    tmp9 = ats2jspre_sub_int0_int0(tmp10, 1);
    ats2jspre_ref_set_elt(statmp0, tmp9);
    tmp12 = ats2jspre_ref_get_elt(statmp0);
    update_lives(tmp12);
    tmpret5 = [1];
  } else {
    gameover();
    tmpret5 = null;
  } // endif
  return tmpret5;
} // end-of-function


function
enemy_get(arg0)
{
//
// knd = 0
  var tmpret14
  var tmp16
  var tmp17
  var tmp18
  var tmp19
  var tmp21
  var tmp22
//
  // __patsflab_enemy_get
  tmp17 = ats2jspre_ref_get_elt(statmp1);
  tmp16 = ats2jspre_sub_int0_int0(tmp17, arg0);
  ats2jspre_ref_set_elt(statmp1, tmp16);
  tmp19 = ats2jspre_ref_get_elt(statmp1);
  tmp18 = ats2jspre_lte_int0_int0(tmp19, 0);
  if(tmp18) {
    tmp22 = ats2jspre_ref_get_elt(statmp1);
    tmp21 = ats2jspre_add_int0_int0(tmp22, 100);
    ats2jspre_ref_set_elt(statmp1, tmp21);
    tmpret14 = [1];
  } else {
    tmpret14 = null;
  } // endif
  return tmpret14;
} // end-of-function


function
enemy_move_get(arg0)
{
//
// knd = 0
  var tmpret23
  var tmp25
  var tmp26
  var tmp27
  var tmp28
  var tmp30
  var tmp31
//
  // __patsflab_enemy_move_get
  tmp26 = ats2jspre_ref_get_elt(statmp2);
  tmp25 = ats2jspre_sub_int0_int0(tmp26, arg0);
  ats2jspre_ref_set_elt(statmp2, tmp25);
  tmp28 = ats2jspre_ref_get_elt(statmp2);
  tmp27 = ats2jspre_lte_int0_int0(tmp28, 0);
  if(tmp27) {
    tmp31 = ats2jspre_ref_get_elt(statmp2);
    tmp30 = ats2jspre_add_int0_int0(tmp31, 10);
    ats2jspre_ref_set_elt(statmp2, tmp30);
    tmpret23 = [1];
  } else {
    tmpret23 = null;
  } // endif
  return tmpret23;
} // end-of-function


function
player_keyPress()
{
//
// knd = 0
  var tmp34
  var tmp35
  var tmp36
  var tmp38
  var tmp39
  var tmp41
  var tmp42
  var tmp43
  var tmp44
  var tmp45
//
  // __patsflab_player_keyPress
  tmp35 = check_key(37);
  tmp34 = ats2jspre_eq_int0_int0(tmp35, 1);
  if(tmp34) {
    tmp36 = ats2jspre_neg_double(20.000000000000000000);
    player_move(tmp36, 0.0);
  } else {
    // ATSINSmove_void
  } // endif
  tmp39 = check_key(39);
  tmp38 = ats2jspre_eq_int0_int0(tmp39, 1);
  if(tmp38) {
    player_move(20.000000000000000000, 0.0);
  } else {
    // ATSINSmove_void
  } // endif
  tmp42 = check_key(38);
  tmp41 = ats2jspre_eq_int0_int0(tmp42, 1);
  if(tmp41) {
    player_move(0.0, 20.000000000000000000);
  } else {
    // ATSINSmove_void
  } // endif
  tmp44 = check_key(40);
  tmp43 = ats2jspre_eq_int0_int0(tmp44, 1);
  if(tmp43) {
    tmp45 = ats2jspre_neg_double(20.000000000000000000);
    player_move(0.0, tmp45);
  } else {
    // ATSINSmove_void
  } // endif
  return/*_void*/;
} // end-of-function


function
player_move(arg0, arg1)
{
//
// knd = 0
  var tmp47
  var tmp48
  var tmp49
  var tmp50
  var tmp51
  var tmp52
  var tmp53
  var tmp54
  var tmp55
  var tmp56
  var tmp57
  var tmp58
  var tmp59
  var tmp60
  var tmp61
  var tmp62
  var tmp63
//
  // __patsflab_player_move
  tmp47 = ats2jspre_eq_double_double(arg0, 0.0);
  if(tmp47) {
    tmp48 = player_getPosition_Y();
    tmp51 = ats2jspre_add_double_double(tmp48, arg1);
    tmp50 = ats2jspre_gt_double_double(tmp51, 500.000000000000000000);
    if(tmp50) {
      tmp49 = true;
    } else {
      tmp52 = ats2jspre_add_double_double(tmp48, arg1);
      tmp53 = ats2jspre_div_double_double(18.000000000000000000, 2.0);
      tmp49 = ats2jspre_lte_double_double(tmp52, tmp53);
    } // endif
    if(tmp49) {
      // ATSINSmove_void
    } else {
      tmp54 = ats2jspre_add_double_double(tmp48, arg1);
      player_setPosition_Y(tmp54);
    } // endif
  } else {
    tmp55 = player_getPosition_X();
    tmp58 = ats2jspre_add_double_double(tmp55, arg0);
    tmp60 = ats2jspre_div_double_int(18.000000000000000000, 2);
    tmp59 = ats2jspre_sub_double_double(400.000000000000000000, tmp60);
    tmp57 = ats2jspre_gt_double_double(tmp58, tmp59);
    if(tmp57) {
      tmp56 = true;
    } else {
      tmp61 = ats2jspre_add_double_double(tmp55, arg0);
      tmp62 = ats2jspre_div_double_int(18.000000000000000000, 2);
      tmp56 = ats2jspre_lt_double_double(tmp61, tmp62);
    } // endif
    if(tmp56) {
      // ATSINSmove_void
    } else {
      tmp63 = ats2jspre_add_double_double(tmp55, arg0);
      player_setPosition_X(tmp63);
    } // endif
  } // endif
  return/*_void*/;
} // end-of-function


function
game_tick(arg0)
{
//
// knd = 0
//
  // __patsflab_game_tick
  enemy_update(arg0);
  score_update(arg0);
  player_update(arg0);
  return/*_void*/;
} // end-of-function


function
player_update(arg0)
{
//
// knd = 0
//
  // __patsflab_player_update
  player_keyPress();
  return/*_void*/;
} // end-of-function


function
enemy_update(arg0)
{
//
// knd = 0
  var tmp69
  var tmp70
//
  // __patsflab_enemy_update
  tmp69 = enemy_get(arg0);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(ATSCKptriscons(tmp69)) { tmplab_js = 4; break; }
      case 2: // __atstmplab1
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      if(ATSCKptrisnull(tmp69)) ATSINScaseof_fail("/home/grad3/gladius/CS520/hwtest/SpaceInvaders/myGame.dats: 2670(line=125, offs=3) -- 2814(line=132, offs=6)");
      case 4: // __atstmplab3
      tmp70 = create_enemy();
      set_enemy_animation(tmp70);
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
set_enemy_animation(arg0)
{
//
// knd = 0
  var tmp72
  var tmp73
  var tmp74
  var tmp75
  var tmp76
  var tmp77
  var tmp78
  var tmp79
  var tmp80
//
  // __patsflab_set_enemy_animation
  tmp72 = player_getPosition_X();
  tmp73 = player_getPosition_Y();
  tmp74 = enemy_getPosition_X(arg0);
  tmp75 = enemy_getPosition_Y(arg0);
  tmp76 = ats2jspre_sub_double_double(tmp72, tmp74);
  tmp77 = ats2jspre_sub_double_double(tmp73, tmp75);
  tmp78 = ats2jspre_div_double_double(tmp76, tmp77);
  tmp79 = calc_speed_x(tmp78);
  tmp80 = ats2jspre_mul_double_double(tmp78, tmp79);
  enemy_move(arg0, tmp79, tmp80, __patsfun_10__closurerize(arg0));
  return/*_void*/;
} // end-of-function


function
__patsfun_10(env0)
{
//
// knd = 0
//
  // __patsflab___patsfun_10
  player_crash(env0);
  return/*_void*/;
} // end-of-function


function
player_crash(arg0)
{
//
// knd = 0
  var tmp84
//
  // __patsflab_player_crash
  enemy_remove(arg0);
  tmp84 = player_get();
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab4
      if(ATSCKptriscons(tmp84)) { tmplab_js = 4; break; }
      case 2: // __atstmplab5
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab6
      if(ATSCKptrisnull(tmp84)) ATSINScaseof_fail("/home/grad3/gladius/CS520/hwtest/SpaceInvaders/myGame.dats: 3393(line=154, offs=3) -- 3484(line=156, offs=18)");
      case 4: // __atstmplab7
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
enemy_move(arg0, arg1, arg2, arg3)
{
//
// knd = 0
  var tmp86
  var tmp87
  var tmp88
  var tmp89
  var tmp91
  var tmp92
//
  // __patsflab_enemy_move
  tmp86 = enemy_getPosition_X(arg0);
  tmp87 = enemy_getPosition_Y(arg0);
  tmp88 = ats2jspre_add_double_double(tmp86, arg1);
  tmp89 = ats2jspre_add_double_double(tmp87, arg2);
  enemy_setPosition(arg0, tmp88, tmp89);
  tmp91 = enemy_check_crash(arg0, tmp88, tmp89);
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab8
      if(!ATSCKpat_int(tmp91, 1)) { tmplab_js = 3; break; }
      case 2: // __atstmplab9
      arg3[0](arg3);
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab10
      if(!ATSCKpat_int(tmp91, 0)) ATSINScaseof_fail("/home/grad3/gladius/CS520/hwtest/SpaceInvaders/myGame.dats: 3828(line=168, offs=3) -- 4123(line=176, offs=6)");
      case 4: // __atstmplab11
      tmp92 = enemy_check_bound(arg0, tmp88, tmp89);
      // ATScaseofseq_beg
      tmplab_js = 1;
      while(true) {
        tmplab = tmplab_js; tmplab_js = 0;
        switch(tmplab) {
          // ATSbranchseq_beg
          case 1: // __atstmplab12
          if(!ATSCKpat_int(tmp92, 1)) { tmplab_js = 3; break; }
          case 2: // __atstmplab13
          panel_remove(arg0);
          break;
          // ATSbranchseq_end
          // ATSbranchseq_beg
          case 3: // __atstmplab14
          if(!ATSCKpat_int(tmp92, 0)) ATSINScaseof_fail("/home/grad3/gladius/CS520/hwtest/SpaceInvaders/myGame.dats: 3967(line=173, offs=5) -- 4111(line=175, offs=86)");
          case 4: // __atstmplab15
          setTimeout_cloref(__patsfun_13__closurerize(arg0, arg1, arg2, arg3), 20.0);
          break;
          // ATSbranchseq_end
        } // end-of-switch
        if (tmplab_js === 0) break;
      } // endwhile
      // ATScaseofseq_end
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
__patsfun_13(env0, env1, env2, env3)
{
//
// knd = 0
//
  // __patsflab___patsfun_13
  enemy_move(env0, env1, env2, env3);
  return/*_void*/;
} // end-of-function


function
enemy_check_crash(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret94
  var tmp95
  var tmp96
  var tmp97
  var tmp98
  var tmp99
  var tmp100
  var tmp101
  var tmp102
//
  // __patsflab_enemy_check_crash
  tmp95 = player_getPosition_X();
  tmp96 = player_getPosition_Y();
  tmp97 = enemy_getPosition_X(arg0);
  tmp98 = enemy_getPosition_Y(arg0);
  tmp99 = calc_dist(tmp95, tmp96, tmp97, tmp98);
  tmp101 = ats2jspre_add_double_double(18.000000000000000000, 18.000000000000000000);
  tmp100 = ats2jspre_div_double_double(tmp101, 2.0);
  tmp102 = ats2jspre_lt_double_double(tmp99, tmp100);
  if(tmp102) {
    crash_report(tmp95, tmp96, tmp97, tmp98);
    tmpret94 = 1;
  } else {
    tmpret94 = 0;
  } // endif
  return tmpret94;
} // end-of-function


function
enemy_check_bound(arg0, arg1, arg2)
{
//
// knd = 0
  var tmpret104
  var tmp105
  var tmp106
  var tmp107
  var tmp108
//
  // __patsflab_enemy_check_bound
  tmp108 = ats2jspre_gt_double_double(arg1, 400.000000000000000000);
  if(tmp108) {
    tmp107 = true;
  } else {
    tmp107 = ats2jspre_lt_double_double(arg1, 0.0);
  } // endif
  if(tmp107) {
    tmp106 = true;
  } else {
    tmp106 = ats2jspre_gt_double_double(arg2, 500.000000000000000000);
  } // endif
  if(tmp106) {
    tmp105 = true;
  } else {
    tmp105 = ats2jspre_lt_double_double(arg2, 0.0);
  } // endif
  if(tmp105) {
    tmpret104 = 1;
  } else {
    tmpret104 = 0;
  } // endif
  return tmpret104;
} // end-of-function


function
cloref_app(arg0)
{
//
// knd = 0
//
  // __patsflab_cloref_app
  arg0[0](arg0);
  return/*_void*/;
} // end-of-function

// dynloadflag_init
var _057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_myGame_056_dats__dynloadflag = 0;

function
_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_myGame_056_dats__dynload()
{
//
// knd = 0
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_myGame_056_dats__dynloadflag(231))
  if(ATSCKiseqz(_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_myGame_056_dats__dynloadflag)) {
    _057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_myGame_056_dats__dynloadflag = 1 ; // flag is set
    statmp0 = ats2jspre_ref(3);
    statmp1 = ats2jspre_ref(100);
    statmp2 = ats2jspre_ref(10);
  } // endif
  return/*_void*/;
} // end-of-function


function
my_dynload()
{
//
// knd = 0
//
  _057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_myGame_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
function
ATS_start()
{
  var _ = my_dynload();
  var _ = init();
}

function
test(x, y, z, a){
  console.log("player:" + x + ", " + y + "; enemy:" + z + ", " + a);
}

function
crash_report(x, y, z, a){
  console.log("crash found => player:" + x + ", " + y + "; enemy:" + z + ", " + a);
}

function
setTimeout_cloref(fwork, ntime)
{
  setTimeout(function(){cloref_app(fwork);return;}, ntime);
}
/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */
