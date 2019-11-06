/*! 20191106-19-RELEASE 2019-11-06 */

(()=>{let t=!1;class l{static injectCardPlacholderStyle(){TRC.dom.injectStyle(`.tbl-loading-spinner.tbl-loading-cards-placeholder { background: transparent; background-size: 100%; height: auto; margin-top: 40px; }.tbl-placeholder-card { background: #f6f7f9; height: 125px; overflow: hidden; position: relative; margin-bottom: 48px; }.tbl-placeholder-card:before { background-color: #f6f7f9; background-image: url(//cdn.taboola.com/static/91/9117a6d9-cbf1-4ea6-8caa-7461ce6554bc.gif); background-repeat: repeat-y; background-size: 100% 1px; content: ' '; display: block; height: 100%; }.tbl-masker { position: absolute; width: calc(100% - 190px - 24px); background-color: #fff; box-sizing: content-box; border-color: #fff; border-style: solid; border-left-width: 24px; }.tbl-first-row-pl, .tbl-second-row-pl, .tbl-third-row-pl { background: transparent; z-index: 1; }.tbl-first-row-pl { top: 0; height: 18px; left: 190px; border-top-width: 11px; border-bottom-width: 18px; }.tbl-second-row-pl { top: 47px; height: 18px; left: 190px; border-top-width: 0; border-bottom-width: 18px; }.tbl-third-row-pl { top: 83px; height: 15px; left: 190px; border-top-width: 0; border-bottom-width: 35px; }.tbl-last-row-right-padding { top: 83px; left: calc(30% + 130px); width: 100%; height: 15px; border-width: 0; }.tbl-img-top-padding, .tbl-img-bottom-padding, .tbl-first-col-padding { display: none; }.tbl-second-col-padding { display: block; width: 24px; height: 100%; border-width: 0; top: 0; right: 0; }.render-late-effect.tbl-feed-container .thumbBlock { opacity: 0; transition: opacity 0.75s; }.render-late-effect.tbl-feed-container .thumbBlock[style*="background-image"] { opacity: 1; }.tbl-loading-placeholder-dir-rtl .tbl-masker { border-right-width: 24px; }.tbl-loading-placeholder-dir-rtl .tbl-first-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-second-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-third-row-pl { right: 190px; left: auto; }.tbl-loading-placeholder-dir-rtl .tbl-last-row-right-padding { right: calc(30% + 130px); left: auto; }.tbl-loading-placeholder-dir-rtl .tbl-second-col-padding { right: auto; left: 0; }@media screen and (max-width: 480px) and (min-width: 0px) { .tbl-loading-spinner.tbl-loading-cards-placeholder { margin-top: 8px; } .tbl-placeholder-card { height: 87px; margin-bottom: 8px; } .tbl-masker { width: calc(100% - 114px - 12px); border-left-width: 12px; } .tbl-loading-placeholder-dir-rtl .tbl-masker { border-right-width: 12px; } .tbl-first-row-pl { top: 0; height: 10px; left: 114px; border-top-width: 16px; border-bottom-width: 10px; } .tbl-second-row-pl { top: 36px; height: 10px; left: 114px; border-top-width: 0; border-bottom-width: 11px; } .tbl-third-row-pl { top: 57px; height: 8px; left: 114px; border-top-width: 0; border-bottom-width: 22px; } .tbl-last-row-right-padding { top: 57px; height: 8px; } .block-no-border, .tbl-img-top-padding, .tbl-img-bottom-padding, .tbl-first-col-padding { display: block; border-width: 0; } .tbl-img-top-padding { height: 10px; width: 100%; top: 0; } .tbl-img-bottom-padding { height: 10px; width: 100%; bottom: 0; } .tbl-first-col-padding { height: 100%; width: 8px; top: 0; left: 0; } .tbl-second-col-padding { display: none; } .tbl-loading-placeholder-dir-rtl .tbl-first-col-padding { right: 0; left: auto; } .tbl-loading-placeholder-dir-rtl .tbl-first-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-second-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-third-row-pl { right: 114px; left: auto; } }`,null),t=!0}static createLoadingCardPlaceholder({direction:d,container:r,cardPlaceholder:o,numPlaceholderItems:e}){t||l.injectCardPlacholderStyle();const i="rtl"===d?"tbl-loading-placeholder-dir-rtl":"";o.className+=`tbl-loading-spinner tbl-loading-cards-placeholder tbl-hidden ${i}`;for(let t=0;t<e;t++)o.innerHTML+=l.createPlaceholderNode();r.appendChild(o),r.className+=" render-late-effect"}static createPlaceholderNode(){const t=`\n                <div class="tbl-placeholder-card">\n                    <div class="tbl-first-row-pl tbl-masker"></div>\n                    <div class="tbl-second-row-pl tbl-masker"></div>\n                    <div class="tbl-third-row-pl tbl-masker"></div>\n                    <div class="tbl-last-row-right-padding tbl-masker"></div>\n                    <div class="tbl-img-top-padding tbl-masker"></div>\n                    <div class="tbl-img-bottom-padding tbl-masker"></div>\n                    <div class="tbl-first-col-padding tbl-masker"></div>\n                    <div class="tbl-second-col-padding tbl-masker"></div>\n                </div>\n            `;return t}}TRC.FeedCardPlaceHolder=l})();