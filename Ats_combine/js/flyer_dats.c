/*
**
** The C code is generated by ATS/Postiats
** The starting compilation time is: 2015-4-24:  0h:19m
**
*/

/*
** include runtime header files
*/
#ifndef _ATS_CCOMP_HEADER_NONE
#include "pats_ccomp_config.h"
#include "pats_ccomp_basics.h"
#include "pats_ccomp_typedefs.h"
#include "pats_ccomp_instrset.h"
#include "pats_ccomp_memalloc.h"
#ifndef _ATS_CCOMP_EXCEPTION_NONE
#include "pats_ccomp_memalloca.h"
#include "pats_ccomp_exception.h"
#endif // end of [_ATS_CCOMP_EXCEPTION_NONE]
#endif /* _ATS_CCOMP_HEADER_NONE */


/*
** include prelude cats files
*/
#ifndef _ATS_CCOMP_PRELUDE_NONE
//
#include "prelude/CATS/basics.cats"
#include "prelude/CATS/integer.cats"
#include "prelude/CATS/pointer.cats"
#include "prelude/CATS/bool.cats"
#include "prelude/CATS/char.cats"
#include "prelude/CATS/integer_ptr.cats"
#include "prelude/CATS/integer_fixed.cats"
#include "prelude/CATS/float.cats"
#include "prelude/CATS/memory.cats"
#include "prelude/CATS/string.cats"
#include "prelude/CATS/strptr.cats"
//
#include "prelude/CATS/filebas.cats"
//
#include "prelude/CATS/list.cats"
#include "prelude/CATS/option.cats"
#include "prelude/CATS/array.cats"
#include "prelude/CATS/arrayptr.cats"
#include "prelude/CATS/arrayref.cats"
#include "prelude/CATS/matrix.cats"
#include "prelude/CATS/matrixptr.cats"
//
#endif /* _ATS_CCOMP_PRELUDE_NONE */
/*
** for user-supplied prelude
*/
#ifdef _ATS_CCOMP_PRELUDE_USER
//
#include _ATS_CCOMP_PRELUDE_USER
//
#endif /* _ATS_CCOMP_PRELUDE_USER */
/*
** for user2-supplied prelude
*/
#ifdef _ATS_CCOMP_PRELUDE_USER2
//
#include _ATS_CCOMP_PRELUDE_USER2
//
#endif /* _ATS_CCOMP_PRELUDE_USER2 */

/*
staload-prologues(beg)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/list.sats: 262(line=21, offs=1) -- 291(line=21, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/list.dats: 357(line=27, offs=1) -- 396(line=28, offs=32)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/list.dats: 423(line=32, offs=1) -- 455(line=32, offs=33)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/list.dats: 482(line=36, offs=1) -- 512(line=36, offs=31)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/print.sats: 189(line=14, offs=1) -- 218(line=14, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/list.dats: 513(line=37, offs=1) -- 545(line=37, offs=33)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/filebas.sats: 200(line=16, offs=1) -- 229(line=16, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/list.dats: 572(line=41, offs=1) -- 601(line=41, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/list.sats: 262(line=21, offs=1) -- 291(line=21, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/option.sats: 262(line=21, offs=1) -- 291(line=21, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/option.dats: 359(line=27, offs=1) -- 398(line=28, offs=32)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/option.dats: 425(line=32, offs=1) -- 457(line=32, offs=33)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/option.dats: 484(line=36, offs=1) -- 515(line=36, offs=32)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/option.sats: 262(line=21, offs=1) -- 291(line=21, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/stream.dats: 359(line=27, offs=1) -- 398(line=28, offs=32)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/stream.dats: 425(line=32, offs=1) -- 457(line=33, offs=25)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/stream.dats: 461(line=35, offs=1) -- 491(line=35, offs=31)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/print.sats: 189(line=14, offs=1) -- 218(line=14, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/DATS/stream.dats: 516(line=39, offs=1) -- 547(line=39, offs=32)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/reference.sats: 200(line=16, offs=1) -- 229(line=16, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/JSmath.sats: 200(line=16, offs=1) -- 229(line=16, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/JSdate.sats: 200(line=16, offs=1) -- 229(line=16, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/JSarray.sats: 200(line=16, offs=1) -- 229(line=16, offs=30)
*/
/*
/cs/coursedata/cs520/ATS2-017/contrib/libatscc/libatscc2js/SATS/JSglobal.sats: 200(line=16, offs=1) -- 229(line=16, offs=30)
*/
/*
staload-prologues(end)
*/
/*
/home/grad3/gladius/CS520/hwtest/SpaceInvaders/flyer.dats: 364(line=25, offs=1) -- 1006(line=57, offs=3)
*/
ATSextcode_beg()
//
var Flyer = function(){
    this.dom = null;
    this.isLive = true;
    this.isMove = false;
    this.moveId = null;
    this.isSend = false;
    this.nowBullet = 0;
    this.Lives = 3;
    this.init();
}
//
Flyer.prototype = {
    gamePanel : null,
    gameWidth : 0,
    gameHeight : 0,
    movepx : 10,
    movesp : 30,
    bulletLevel : 1,
    maxBullet : 12,
    keyCodeAndDirection : {
        37 : "left",
        38 : "up",
        39 : "right",
        40 : "down"
    },
    init : function(){
        this.dom = document.createElement('div');
        this.dom.className = 'flyer';
    }
}
ATSextcode_end()
/*
/home/grad3/gladius/CS520/hwtest/SpaceInvaders/flyer.dats: 1052(line=61, offs=1) -- 1421(line=73, offs=3)
*/
ATSextcode_beg()
//
function
flyerSetPosition(flyer,gamePanel,width,height){
    var flyer = flyer;
    var gamePanel = gamePanel;
    gamePanel.appendChild(flyer.dom);
    flyer.dom.style.left = (width - flyer.dom.clientWidth) / 2 + 'px';
    flyer.dom.style.top = height - flyer.dom.clientHeight + 'px';
    flyer.gameWidth = width;
    flyer.gameHeight = height;
}
ATSextcode_end()
/*
typedefs-for-tyrecs-and-tysums(beg)
*/
/*
typedefs-for-tyrecs-and-tysums(end)
*/
/*
dynconlst-declaration(beg)
*/
/*
dynconlst-declaration(end)
*/
/*
dyncstlst-declaration(beg)
*/
/*
dyncstlst-declaration(end)
*/
/*
dynvalist-implementation(beg)
*/
/*
dynvalist-implementation(end)
*/
/*
exnconlst-declaration(beg)
*/
#ifndef _ATS_CCOMP_EXCEPTION_NONE
ATSextern()
atsvoid_t0ype
the_atsexncon_initize
(
  atstype_exnconptr d2c, atstype_string exnmsg
) ;
#endif // end of [_ATS_CCOMP_EXCEPTION_NONE]
/*
exnconlst-declaration(end)
*/
/*
assumelst-declaration(beg)
*/
/*
assumelst-declaration(end)
*/
/*
extypelst-declaration(beg)
*/
/*
extypelst-declaration(end)
*/
/*
** for initialization(dynloading)
*/
ATSdynloadflag_init(_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_flyer_056_dats__dynloadflag) ;
ATSextern()
atsvoid_t0ype
_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_flyer_056_dats__dynload()
{
ATSfunbody_beg()
ATSdynload(/*void*/)
ATSdynloadflag_sta(
_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_flyer_056_dats__dynloadflag
) ;
ATSif(
ATSCKiseqz(
_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_flyer_056_dats__dynloadflag
)
) ATSthen() {
ATSdynloadset(_057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_flyer_056_dats__dynloadflag) ;
/*
dynexnlst-initize(beg)
*/
/*
dynexnlst-initize(end)
*/
} /* ATSendif */
ATSfunbody_end()
ATSreturn_void(tmpret_void) ;
} /* end of [*_dynload] */
ATSextern()
atsvoid_t0ype
mygame_flyer_initize()
{
ATSfunbody_beg()
ATSINSmove_void(tmpret_void, _057_home_057_grad3_057_gladius_057_CS520_057_hwtest_057_SpaceInvaders_057_flyer_056_dats__dynload()) ;
ATSfunbody_end()
ATSreturn_void(tmpret_void) ;
} // end-of-dynload-alias

/* ****** ****** */

/* end-of-compilation-unit */
