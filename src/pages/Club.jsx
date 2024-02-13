import React from 'react'
import { Link } from 'react-router-dom'

export default function Club() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&family=Roboto:wght@300;400;500;700&display=swap");\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nnav {\n\tuser-select: none;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\t-o-user-select: none;\n}\n\nnav ul,\nnav ul li {\n\toutline: 0;\n}\n\nnav ul li a {\n\ttext-decoration: none;\n}\n\nbody {\n\tfont-family: "Nunito", sans-serif;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmin-height: 100vh;\n\tbackground-image: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5baf8325-ed69-40b0-b9d2-d8c5d2bde3b0);\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\t/* background: #212140; */\n}\n\n/* MAIN MENU */\n\nmain {\n\tdisplay: grid;\n\tgrid-template-columns: 13% 87%;\n\tmin-height: 100vh;\n\twidth: 100%;\n\tmargin: 40px;\n\tbackground: rgb(254, 254, 254);\n\tbox-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,\n\t\t0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);\n\tborder-radius: 15px;\n\tz-index: 10;\n}\n\n.main-menu {\n\toverflow: hidden;\n\tbackground: rgb(73, 57, 113);\n\tpadding-top: 10px;\n\tborder-radius: 15px 0 0 15px;\n\tfont-family: "Roboto", sans-serif;\n}\n\n.main-menu h1 {\n\tdisplay: block;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\ttext-align: center;\n\tmargin: 20px 0 30px;\n\tcolor: #fff;\n\tfont-family: "Nunito", sans-serif;\n}\n\n.logo {\n\tdisplay: none;\n}\n\n.nav-item {\n\tposition: relative;\n\tdisplay: block;\n}\n\n.nav-item a {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tpadding: 15px 0;\n\tmargin-left: 10px;\n\tborder-top-left-radius: 20px;\n\tborder-bottom-left-radius: 20px;\n}\n\n.nav-item b:nth-child(1) {\n\tposition: absolute;\n\ttop: -15px;\n\theight: 15px;\n\twidth: 100%;\n\tbackground: #fff;\n\tdisplay: none;\n}\n\n.nav-item b:nth-child(1)::before {\n\tcontent: "";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-bottom-right-radius: 20px;\n\tbackground: rgb(73, 57, 113);\n}\n\n.nav-item b:nth-child(2) {\n\tposition: absolute;\n\tbottom: -15px;\n\theight: 15px;\n\twidth: 100%;\n\tbackground: #fff;\n\tdisplay: none;\n}\n\n.nav-item b:nth-child(2)::before {\n\tcontent: "";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tborder-top-right-radius: 20px;\n\tbackground: rgb(73, 57, 113);\n}\n\n.nav-item.active b:nth-child(1),\n.nav-item.active b:nth-child(2) {\n\tdisplay: block;\n}\n\n.nav-item.active a {\n\ttext-decoration: none;\n\tcolor: #000;\n\tbackground: rgb(254, 254, 254);\n}\n\n.nav-icon {\n\twidth: 60px;\n\theight: 20px;\n\tfont-size: 20px;\n\ttext-align: center;\n}\n\n.nav-text {\n\tdisplay: block;\n\twidth: 120px;\n\theight: 20px;\n\tfont-family: "Mulish", sans-serif;\n}\n\n/* CONTENT */\n\n.content {\n\tdisplay: grid;\n\tgrid-template-columns: 75% 25%;\n}\n\n/* LEFT CONTENT */\n\n.left-content {\n\tdisplay: grid;\n\tgrid-template-rows: 50% 50%;\n\tbackground: #f6f7fb;\n\tmargin: 15px;\n\tpadding: 20px;\n\tborder-radius: 15px;\n}\n\n/* ACTIVITIES */\n\n.activities h1 {\n\tmargin: 0 0 20px;\n\tfont-size: 1.4rem;\n\tfont-weight: 700;\n}\n\n.activity-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, 1fr);\n\tgrid-template-rows: repeat(2, 150px);\n\tcolumn-gap: 10px;\n}\n\n.img-one {\n\tgrid-area: 1 / 1 / 2 / 2;\n}\n\n.img-two {\n\tgrid-area: 2 / 1 / 3 / 2;\n}\n\n.img-three {\n\tdisplay: block;\n\tgrid-area: 1 / 2 / 3 / 4;\n}\n\n.img-four {\n\tgrid-area: 1 / 4 / 2 / 5;\n}\n\n.img-five {\n\tgrid-area: 1 / 5 / 2 / 6;\n}\n\n.img-six {\n\tdisplay: block;\n\tgrid-area: 2 / 4 / 3 / 6;\n}\n\n.image-container {\n\tposition: relative;\n\tmargin-bottom: 10px;\n\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\n\tborder-radius: 10px;\n}\n\n.image-container img {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\tobject-fit: cover;\n}\n\n.overlay {\n\tposition: absolute;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: linear-gradient(\n\t\t180deg,\n\t\ttransparent,\n\t\ttransparent,\n\t\trgba(3, 3, 185, 0.5)\n\t);\n\tborder-radius: 10px;\n\ttransition: all 0.6s linear;\n}\n\n.image-container:hover .overlay {\n\topacity: 0;\n}\n\n.overlay h3 {\n\tmargin-bottom: 8px;\n\tmargin-right: 10px;\n\tcolor: #fff;\n}\n\n/* LEFT BOTTOM */\n\n.left-bottom {\n\tdisplay: grid;\n\tgrid-template-columns: 55% 40%;\n\tgap: 40px;\n}\n\n/* WEEKLY SCHEDULE */\n\n.weekly-schedule {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.weekly-schedule h1 {\n\tmargin-top: 20px;\n\tfont-size: 1.3rem;\n\tfont-weight: 700;\n}\n\n.calendar {\n\tmargin-top: 10px;\n}\n\n.day-and-activity {\n\tdisplay: grid;\n\tgrid-template-columns: 15% 60% 25%;\n\talign-items: center;\n\tborder-radius: 14px;\n\tmargin-bottom: 5px;\n\tcolor: #484d53;\n\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\n}\n\n.activity-one {\n\tbackground-color: rgb(124, 136, 224, 0.5);\n\tbackground-image: linear-gradient(240deg, rgb(124, 136, 224) 0%, #c3f4fc 100%);\n}\n\n.activity-two {\n\tbackground-color: #aee2a4a1;\n\tbackground-image: linear-gradient(240deg, #e5a243ab 0%, #f7f7aa 90%);\n}\n\n.activity-three {\n\tbackground-color: #ecfcc376;\n\tbackground-image: linear-gradient(240deg, #97e7d1 0%, #ecfcc3 100%);\n}\n\n.activity-four {\n\tbackground-color: #e6a7c3b5;\n\tbackground-image: linear-gradient(240deg, #fc8ebe 0%, #fce5c3 100%);\n}\n\n.day {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\ttransform: translateY(-10px);\n}\n\n.day h1 {\n\tfont-size: 1.6rem;\n\tfont-weight: 600;\n}\n\n.day p {\n\ttext-transform: uppercase;\n\tfont-size: 0.9rem;\n\tfont-weight: 600;\n\ttransform: translateY(-3px);\n}\n\n.activity {\n\tborder-left: 3px solid #484d53;\n}\n\n.participants {\n\tdisplay: flex;\n\tmargin-left: 20px;\n}\n\n.participants img {\n\twidth: 28px;\n\theight: 28px;\n\tborder-radius: 50%;\n\tz-index: calc(2 * var(--i));\n\tmargin-left: -10px;\n\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\n}\n\n.activity h2 {\n\tmargin-left: 10px;\n\tfont-size: 1.25rem;\n\tfont-weight: 600;\n\tborder-radius: 12px;\n}\n\n.btn {\n\tdisplay: block;\n\tpadding: 8px 8px;\n\tmargin: 5px auto;\n\tfont-size: 1.1rem;\n\tfont-weight: 500;\n\toutline: none;\n\ttext-decoration: none;\n\tcolor: #484b57;\n\tbackground: rgba(255, 255, 255, 0.9);\n\tbox-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);\n\tborder: 1px solid rgba(255, 255, 255, 0.3);\n\tborder-radius: 25px;\n\tcursor: pointer;\n}\n\n.btn:hover,\n.btn:focus,\n.btn:active,\n.btn:visited {\n\ttransition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);\n\tanimation: gelatine 0.5s 1;\n}\n\n@keyframes gelatine {\n\t0%,\n\t100% {\n\t\ttransform: scale(1, 1);\n\t}\n\t25% {\n\t\ttransform: scale(0.9, 1.1);\n\t}\n\t50% {\n\t\ttransform: scale(1.1, 0.9);\n\t}\n\t75% {\n\t\ttransform: scale(0.95, 1.05);\n\t}\n}\n\n/* PERSONAL BESTS */\n\n.personal-bests {\n\tdisplay: block;\n}\n\n.personal-bests h1 {\n\tmargin-top: 20px;\n\tfont-size: 1.3rem;\n\tfont-weight: 700;\n}\n\n.personal-bests-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: repeat(2, 150px);\n\tgap: 10px;\n\tmargin-top: 10px;\n}\n\n.best-item {\n\tdisplay: flex;\n\tgap: 20px;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 15px;\n\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\n}\n\n.box-one {\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\tgrid-area: 1 / 1 / 2 / 3;\n\tbackground-color: rgba(185, 159, 237, 0.6);\n\tpadding: 15px;\n\tfont-size: 1rem;\n\tfont-weight: 700;\n}\n\n.box-one img {\n\tmax-width: 100px;\n\taspect-ratio: 4/3;\n}\n\n.box-two {\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tfont-size: 0.9rem;\n\tfont-weight: 700;\n\tpadding: 10px;\n\tgrid-area: 2 / 1 / 3 / 2;\n\tbackground-color: rgba(238, 184, 114, 0.6);\n}\n\n.box-two img {\n\tmax-width: 90px;\n\taspect-ratio: 3/2;\n\talign-self: flex-end;\n}\n\n.box-three {\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tfont-size: 0.9rem;\n\tfont-weight: 700;\n\tpadding: 10px;\n\tgrid-area: 2 / 2 / 3 / 3;\n\tbackground-color: rgba(184, 224, 192, 0.6);\n}\n\n.box-three img {\n\tmax-width: 70px;\n\taspect-ratio: 1/1;\n\talign-self: flex-end;\n}\n\n/* RIGHT CONTENT */\n\n.right-content {\n\tdisplay: grid;\n\tgrid-template-rows: 5% 20% 75%;\n\tbackground: #f6f7fb;\n\tmargin: 15px 15px 15px 0;\n\tpadding: 10px 0;\n\tborder-radius: 15px;\n}\n\n/* USER INFO */\n\n.user-info {\n\tdisplay: grid;\n\tgrid-template-columns: 30% 55% 15%;\n\talign-items: center;\n\tpadding: 0 10px;\n}\n\n.icon-container {\n\tdisplay: flex;\n\tgap: 15px;\n}\n\n.user-info h4 {\n\tmargin-left: 40px;\n}\n\n.user-info img {\n\twidth: 40px;\n\taspect-ratio: 1/1;\n\tborder-radius: 50%;\n}\n\n/* ACTIVE CALORIES  */\n\n.active-calories {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n justify-content: space-around;\n\tbackground-color: rgb(214, 227, 248);\n\tpadding: 0 10px;\n\tmargin: 15px 10px 0;\n\tborder-radius: 15px;\n\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\n}\n\n.active-calories h1 {\n\tmargin-top: 10px;\n\tfont-size: 1.2rem;\n}\n\n\n\n.calories-content p {\n\tfont-size: 1rem;\n}\n\n.calories-content p span {\n\tfont-weight: 700;\n}\n\n.box {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tposition: relative;\n\tpadding: 10px 0;\n\t/* width: 200px; */\n}\n\n.box h2 {\n\tposition: relative;\n\ttext-align: center;\n\tfont-size: 1.25rem;\n\tcolor: rgb(91, 95, 111);\n\tfont-weight: 600;\n}\n\n.box h2 small {\n\tfont-size: 0.8rem;\n\tfont-weight: 600;\n}\n\n.circle {\n\tposition: relative;\n\twidth: 80px;\n\taspect-ratio: 1/1;\n\tbackground: conic-gradient(\n\t\tfrom 0deg,\n\t\t#590b94 0%,\n\t\t#590b94 0% var(--i),\n\t\t#b3b2b2 var(--i),\n\t\t#b3b2b2 100%\n\t);\n\tborder-radius: 50%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.circle::before {\n\tcontent: "";\n\tposition: absolute;\n\tinset: 10px;\n\tbackground-color: rgb(214, 227, 248);\n\tborder-radius: 50%;\n}\n\n/* MOBILE PERSONAL BESTS  */\n\n.mobile-personal-bests {\n\tdisplay: none;\n}\n\n/* FRIEND ACTIVITIES  */\n\n.friends-activity {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.friends-activity h1 {\n\tfont-size: 1.2rem;\n\tfont-weight: 700;\n\tmargin: 15px 0 10px 15px;\n}\n\n.card-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.card {\n\tbackground-color: #fff;\n\tmargin: 0 10px;\n\tpadding: 5px 7px;\n\tborder-radius: 15px;\n\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\n}\n\n.card-two {\n\tdisplay: block;\n}\n\n.card-user-info {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-bottom: 5px;\n}\n\n.card-user-info img {\n\twidth: 25px;\n\taspect-ratio: 1/1;\n\tborder-radius: 50%;\n\tobject-fit: cover;\n}\n\n.card-user-info h2 {\n\tfont-size: 1rem;\n\tfont-weight: 700;\n\tmargin-left: 5px;\n}\n\n.card-img {\n\tdisplay: block;\n\twidth: 100%;\n\taspect-ratio: 7/4;\n\tmargin-bottom: 10px;\n\tobject-fit: cover;\n\tborder-radius: 10px;\n\tobject-position: 50% 30%;\n}\n\n.card p {\n\tfont-size: 0.9rem;\n\tpadding: 0 5px 5px;\n}\n.calories-content{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media (max-width: 1500px) {\n\tmain {\n\t\tgrid-template-columns: 6% 94%;\n\t}\n\n\t.main-menu h1 {\n\t\tdisplay: none;\n\t}\n\n\t.logo {\n\t\tdisplay: block;\n\t\twidth: 30px;\n\t\tmargin: 20px auto;\n\t}\n\n\t.nav-text {\n\t\tdisplay: none;\n\t}\n\n\t.content {\n\t\tgrid-template-columns: 70% 30%;\n\t}\n}\n\n@media (max-width: 1310px) {\n\tmain {\n\t\tgrid-template-columns: 8% 92%;\n\t\tmargin: 30px;\n\t}\n\n\t.content {\n\t\tgrid-template-columns: 65% 35%;\n\t}\n\n\t.day-and-activity {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.btn {\n\t\tpadding: 8px 8px;\n\t\tmargin: 5px 0;\n\t\tmargin-right: 10px;\n\t\tfont-size: 1rem;\n\t}\n\n\t.personal-bests-container {\n\t\tgrid-template-rows: repeat(3, 98px);\n\t\tgap: 15px;\n\t}\n\n\t.box-one {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tgrid-area: 1 / 1 / 2 / 3;\n\t\tpadding: 10px;\n\t\tfont-size: 0.9rem;\n\t}\n\n\t.box-one img {\n\t\tmax-width: 80px;\n\t}\n\n\t.box-two {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tgrid-area: 2 / 1 / 3 / 3;\n\t}\n\n\t.box-two img {\n\t\tmax-width: 70px;\n\t\talign-self: center;\n\t}\n\n\t.box-three {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tgrid-area: 3 / 1 / 4 / 3;\n\t}\n\n\t.box-three img {\n\t\tmax-width: 60px;\n\t\talign-self: center;\n\t}\n\n\t.right-content {\n\t\tgrid-template-rows: 4% 20% 76%;\n\t\tmargin: 15px 15px 15px 0;\n\t}\n}\n\n@media (max-width: 1150px) {\n\t.content {\n\t\tgrid-template-columns: 60% 40%;\n\t}\n\n\t.left-content {\n\t\tgrid-template-rows: 50% 50%;\n\t\tmargin: 15px;\n\t\tpadding: 20px;\n\t}\n\n\t.btn {\n\t\tpadding: 4px 4px;\n\t\tfont-size: 0.8rem;\n\t}\n\n\t.personal-bests-container {\n\t\tgrid-template-rows: repeat(3, 70px);\n\t\tgap: 10px;\n\t}\n\n\t.activity-container {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tgrid-template-rows: repeat(2, 150px);\n\t}\n\n\t.img-one {\n\t\tgrid-area: 1 / 1 / 2 / 2;\n\t}\n\n\t.img-two {\n\t\tgrid-area: 2 / 1 / 3 / 2;\n\t}\n\n\t.img-three {\n\t\tdisplay: none;\n\t}\n\n\t.img-four {\n\t\tgrid-area: 1 / 2 / 2 / 3;\n\t}\n\n\t.img-five {\n\t\tgrid-area: 1 / 3 / 2 / 4;\n\t}\n\n\t.img-six {\n\t\tgrid-area: 2 / 2 / 3 / 4;\n\t}\n\n\t.left-bottom {\n\t\tgrid-template-columns: 100%;\n\t\tgap: 0;\n\t}\n\n\t.right-content {\n\t\tgrid-template-rows: 4% 19% 36% 41%;\n\t}\n\n\t.personal-bests {\n\t\tdisplay: none;\n\t}\n\n\t.mobile-personal-bests {\n\t\tdisplay: block;\n\t\tmargin: 0 10px;\n\t}\n\n\t.mobile-personal-bests h1 {\n\t\tmargin-top: 20px;\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.card-two {\n\t\tdisplay: none;\n\t}\n\n\t.card-img {\n\t\taspect-ratio: 16/9;\n\t}\n}\n\n@media (max-width: 1050px) {\n\t.right-content {\n\t\tgrid-template-rows: 5% 19% 36% 40%;\n\t}\n}\n\n@media (max-width: 910px) {\n\tmain {\n\t\tgrid-template-columns: 10% 90%;\n\t\tmargin: 20px;\n\t}\n\n\t.content {\n\t\tgrid-template-columns: 55% 45%;\n\t}\n\n\t.left-content {\n\t\tgrid-template-rows: 50% 50%;\n\t\tpadding: 30px 20px 20px;\n\t}\n\n\t.activity-container {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tgrid-template-rows: repeat(2, 150px);\n\t}\n\n\t.img-one {\n\t\tgrid-area: 1 / 1 / 2 / 2;\n\t}\n\n\t.img-two {\n\t\tgrid-area: 2 / 1 / 3 / 2;\n\t}\n\n\t.img-three {\n\t\tdisplay: none;\n\t}\n\n\t.img-four {\n\t\tgrid-area: 1 / 2 / 2 / 3;\n\t}\n\n\t.img-five {\n\t\tgrid-area: 2 / 2 / 3 / 3;\n\t}\n\n\t.img-six {\n\t\tdisplay: none;\n\t}\n}\n\n@media (max-width: 800px) {\n\t.content {\n\t\tgrid-template-columns: 52% 48%;\n\t}\n}\n\n@media (max-width: 700px) {\n\tmain {\n\t\tgrid-template-columns: 15% 85%;\n\t}\n\n\t.content {\n\t\tgrid-template-columns: 100%;\n\t\tgrid-template-rows: 45% 55%;\n\t\tgrid-template-areas:\n\t\t\t"rightContent"\n\t\t\t"leftContent";\n\t}\n\n\t.left-content {\n\t\tgrid-area: leftContent;\n\t\tgrid-template-rows: 45% 55%;\n\t\tpadding: 10px 20px 10px;\n\t}\n\n\t.right-content {\n\t\tgrid-area: rightContent;\n\t\tgrid-template-rows: 5% 40% 50%;\n\t\tmargin: 15px 15px 0 15px;\n\t\tpadding: 10px 0 0;\n\t\tgap: 15px;\n\t}\n\n\t.activities,\n\t.weekly-schedule {\n\t\tmargin-top: 10px;\n\t}\n\n\t.active-calories-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tgap: 10px;\n\t}\n\n\t.friends-activity {\n\t\tdisplay: none;\n\t}\n}\n\n  '
    }}
  />
  <main>
    <nav className="main-menu">
      <h1>Club Dashboard</h1>
      <img
        className="logo"
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb"
        alt=""
      />
      <ul>
        <li className="nav-item active">
          <b />
          <b />
          <a href="#">
            <i className="fa fa-house nav-icon" />
            <span className="nav-text">Home</span>
          </a>
        </li>
      </ul>
    </nav>
    <section className="content">
      <div className="left-content">
        <div className="activities">
          <h1>Club Activities</h1>
          <div className="activity-container">
            <div className="image-container img-one">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                alt="tennis"
              />
              <div className="overlay">
                <h3>Painting</h3>
              </div>
            </div>
            <div className="image-container img-two">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478"
                alt="hiking"
              />
              <div className="overlay">
                <h3>Art</h3>
              </div>
            </div>
            <div className="image-container img-three">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021"
                alt="running"
              />
              <div className="overlay">
                <h3>Drawing</h3>
              </div>
            </div>
            <div className="image-container img-four">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19"
                alt="cycling"
              />
              <div className="overlay">
                <h3>Cycling</h3>
              </div>
            </div>
            <div className="image-container img-five">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411"
                alt="yoga"
              />
              <div className="overlay">
                <h3>Yoga</h3>
              </div>
            </div>
            <div className="image-container img-six">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9"
                alt="swimming"
              />
              <div className="overlay">
                <h3>Swimming</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="left-bottom">
          <div className="weekly-schedule">
            <h1>Pending Events</h1>
            <div className="calendar">
              <div className="day-and-activity activity-one">
                <div className="day">
                  <h1>13</h1>
                  <p>mon</p>
                </div>
                <div className="activity">
                  <h2>Swimming</h2>
                </div>
                <Link to='/progress'>
                <button className="btn">See Progress</button>
                </Link>
              </div>
              <div className="day-and-activity activity-two">
                <div className="day">
                  <h1>15</h1>
                  <p>wed</p>
                </div>
                <div className="activity">
                  <h2>Yoga</h2>
                </div>
                <Link to='/progress'>
                <button className="btn">See Progress</button>
                </Link>
              </div>
              <div className="day-and-activity activity-three">
                <div className="day">
                  <h1>17</h1>
                  <p>fri</p>
                </div>
                <div className="activity">
                  <h2>Tennis</h2>
                </div>
                <Link to='/progress'>
                <button className="btn">See Progress</button>
                </Link>
              </div>
              <div className="day-and-activity activity-four">
                <div className="day">
                  <h1>18</h1>
                  <p>sat</p>
                </div>
                <div className="activity">
                  <h2>Drawing</h2>
                </div>
                <Link to='/progress'>
                <button className="btn">See Progress</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="personal-bests">
            <div className="personal-bests-container">
            <Link to="/eventform">
              <div className="best-item box-one">
                <p>Add Event</p>
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                  alt=""
                />
              </div>
              </Link>
              <Link to='/reports'>
              <div className="best-item box-two">
                <h1>Generate Reports</h1>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="user-info">
          <div className="icon-container">
            <i className="fa fa-bell nav-icon" />
            <i className="fa fa-message nav-icon" />
          </div>
          <h4>Iridiscence</h4>
        </div>
        <div className="active-calories">
          <h1 style={{ alignSelf: "center" }}>Active Status</h1>
          <div className="calories-content">
            <p>
              <span>Remaining Budget:</span> 4000
            </p>
            <p>
              <span>Pending Events:</span> 3
            </p>
            <p>
              <span>Total Events:</span> 14
            </p>
          </div>
        </div>
        <div className="mobile-personal-bests">
          <h1>Add New Event</h1>
          
          <div className="personal-bests-container">
          <Link to="/eventform">
            <div className="best-item box-one">
              <p>Add Event </p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/05dfc444-9ed3-44cc-96af-a9cf195f5820"
                alt=""
              />
            </div>
            </Link>
            
             
            <div className="best-item box-two">
            <Link to='/reports'>
              <h1>Generate Reports</h1>
            </Link>
            </div>
            
          </div>
        </div>
        <div className="friends-activity">
          <h1>previous Events</h1>
          <div className="weekly-schedule">
            <div className="calendar">
              <div className="day-and-activity activity-one">
                <div className="day">
                  <h1>13</h1>
                  <p>mon</p>
                </div>
                <div className="activity">
                  <h2>Art</h2>
                </div>
                <Link to='/bills'>
                <button className="btn">update</button>
                </Link>
              </div>
              <div className="day-and-activity activity-two">
                <div className="day">
                  <h1>15</h1>
                  <p>wed</p>
                </div>
                <div className="activity">
                  <h2>Drawing</h2>
                </div>
                <Link to='/bills'>
                <button className="btn">update</button>
                </Link>
              </div>
              <div className="day-and-activity activity-three">
                <div className="day">
                  <h1>17</h1>
                  <p>fri</p>
                </div>
                <div className="activity">
                  <h2>Painting</h2>
                </div>
                <Link to='/bills'>
                <button className="btn">update</button>
                </Link>
              </div>
              <div className="day-and-activity activity-four">
                <div className="day">
                  <h1>18</h1>
                  <p>sat</p>
                </div>
                <div className="activity">
                  <h2>Hiking</h2>
                </div>
                <Link to='/bills'>
                <button className="btn">update</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</>

  )
}
