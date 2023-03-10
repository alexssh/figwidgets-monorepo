"use strict";(()=>{var vt=Object.defineProperty,Lt=Object.defineProperties;var Ct=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var wt=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable;var $=(t,i,n)=>i in t?vt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(t,i)=>{for(var n in i||(i={}))wt.call(i,n)&&$(t,n,i[n]);if(G)for(var n of G(i))kt.call(i,n)&&$(t,n,i[n]);return t},d=(t,i)=>Lt(t,Ct(i));var g={added:{label:"Added",status:"success"},fixed:{label:"Fixed",status:"primary"},changed:{label:"Changed",status:"info"},deprecated:{label:"Deprecated",status:"warning"},removed:{label:"Removed",status:"dark"},breaking:{label:"Breaking",status:"error"},other:{label:"Other",status:"disabled"},inProgress:{label:"In progress",status:"light"}};var f="Inter",C="#000",s="#FFF",Et="#EBEBEB",S="#DDDDDD",_="#B4B4B4",w="#979797",D="#777";var A="#545454",U="#424242",Z="#252525",Y="#29B95F",c="#277DFF",m="#00B6F0",N={r:0,g:.713,b:.9411,a:.12},j="#7522C5",I="#FAB020",K={r:.98,g:.704,b:.128,a:.12},R="#FF730E",y="#D20000",q={r:.823,g:0,b:0,a:.12},Tt={themes:{typo:{h4:{fontFamily:f,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:f,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:f,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:f,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:f,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:f,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:f,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{light:{color:C},dark:{color:s}},inverted:{light:{color:s},dark:{color:C}}},secondary:{default:{light:{color:D},dark:{color:w}}},minor:{default:{light:{color:_},dark:{color:A}}},link:{default:{light:{color:c},dark:{color:c}}}},border:{divider:{light:{fill:S},dark:{fill:U}}},shadow:{container:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},transparent:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0}}},status:{success:{light:{fill:Y,color:s},dark:{fill:Y,color:s}},warning:{light:{fill:R,color:s},dark:{fill:R,color:s}},error:{light:{fill:y,color:s},dark:{fill:y,color:s}},important:{light:{fill:I,color:s},dark:{fill:I,color:s}},secondary:{light:{fill:m,color:s},dark:{fill:m,color:s}},primary:{light:{fill:c,color:s},dark:{fill:c,color:s}},info:{light:{fill:j,color:s},dark:{fill:j,color:s}},dark:{light:{fill:C,color:s},dark:{fill:C,color:s}},white:{light:{fill:s,color:s},dark:{fill:s,color:s}},light:{light:{fill:{r:0,g:0,b:0,a:0},color:D,border:{stroke:w,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:{r:0,g:0,b:0,a:0},color:s,border:{stroke:S,strokeWidth:1,strokeAlign:"inside"}}},disabled:{light:{fill:w,color:s},dark:{fill:w,color:s}}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},radius:{cornerRadius:4},ghost:{default:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}},hover:{light:{fill:Et},dark:{fill:U}},disabled:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}}},checkbox:{disabled:{light:{fill:s,border:{stroke:_,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:Z,border:{stroke:A,strokeWidth:1,strokeAlign:"inside"}}},disabledActive:{light:{fill:_},dark:{fill:A}},hover:{light:{border:{stroke:c,strokeWidth:2,strokeAlign:"inside"}},dark:{border:{stroke:c,strokeWidth:2,strokeAlign:"inside"}}},empty0:{light:{fill:s,border:{stroke:D,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:Z,border:{stroke:w,strokeWidth:1,strokeAlign:"inside"}}},active0:{light:{fill:C},dark:{fill:s}},empty1:{light:{fill:N,border:{stroke:m,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:N,border:{stroke:m,strokeWidth:1,strokeAlign:"inside"}}},active1:{light:{fill:m},dark:{fill:m}},empty2:{light:{fill:K,border:{stroke:I,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:K,border:{stroke:I,strokeWidth:1,strokeAlign:"inside"}}},active2:{light:{fill:R},dark:{fill:R}},empty3:{light:{fill:q,border:{stroke:y,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:q,border:{stroke:y,strokeWidth:1,strokeAlign:"inside"}}},active3:{light:{fill:y},dark:{fill:y}}}},layer:{default:{light:{fill:s},dark:{fill:Z}},active:{light:{fill:c},dark:{fill:c}},disabled:{light:{fill:_},dark:{fill:A}}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}},o=Tt;var{widget:xt}=figma,{Input:Vt,Text:pt,Fragment:_t}=xt;function At(t){var i,n,k,a,E,L,T,x,V;return figma.widget.h(_t,null,!t.disabled&&figma.widget.h(Vt,l(l({name:"InputGhost",inputBehavior:(i=t.type)!=null?i:"wrap",value:t.content,placeholder:t.placeholder,placeholderProps:{fill:o.themes.txt.minor.default[t.theme].color,opacity:1},width:(k=(n=t==null?void 0:t.style)==null?void 0:n.width)!=null?k:"fill-parent",onTextEditEnd:B=>t.onEditEnd(B),fill:o.themes.txt[t.variant.txt].default[t.theme].color,horizontalAlignText:(E=(a=t==null?void 0:t.style)==null?void 0:a.textAlign)!=null?E:"left",hoverStyle:{fill:o.themes.txt.link.default[t.theme].color}},o.themes.typo[t.variant.typo]),t==null?void 0:t.style)),t.disabled&&figma.widget.h(pt,l(d(l({},o.themes.typo[t.variant.typo]),{fill:o.themes.txt[t.variant.txt].default[t.theme].color,width:(T=(L=t==null?void 0:t.style)==null?void 0:L.width)!=null?T:"fill-parent",horizontalAlignText:(V=(x=t==null?void 0:t.style)==null?void 0:x.textAlign)!=null?V:"left"}),t==null?void 0:t.style),t.content))}var u=At;var{widget:It}=figma,{Rectangle:Rt}=It;function Ot(t){return figma.widget.h(Rt,{width:"fill-parent",height:1,fill:o.themes.border.divider[t.theme].fill})}var O=Ot;var{widget:Bt}=figma,{AutoLayout:z,Text:ye,Fragment:Ht}=Bt;function Ft(t){return t.isTitleVisible||t.isDescriptionVisible||t.suffix!==void 0?figma.widget.h(Ht,null,figma.widget.h(z,{name:"Header",verticalAlignItems:"start",direction:"horizontal",spacing:24,width:"fill-parent",padding:o.themes.layout.container},figma.widget.h(z,{name:"Widget__row",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",height:t.isTitleVisible||t.isDescriptionVisible?"hug-contents":1},t.isTitleVisible&&figma.widget.h(u,{theme:t.theme,variant:{typo:"h4",txt:"primary"},content:t.title,placeholder:"Title",disabled:t.disabled,onEditEnd:i=>t.onTitleEditEnd(i)}),t.isDescriptionVisible&&figma.widget.h(u,{theme:t.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:t.description,placeholder:"Add any description...",disabled:t.disabled,onEditEnd:i=>t.onDescriptionEditEnd(i)})),t.suffix&&figma.widget.h(z,{name:"Widget__suffix",verticalAlignItems:"start",direction:"vertical",spacing:8,padding:{top:t.isTitleVisible?4:0},width:"hug-contents"},t.suffix)),figma.widget.h(O,{theme:t.theme})):figma.widget.h(figma.widget.Fragment,null)}var J=Ft;var{widget:Mt}=figma,{AutoLayout:Dt,Text:we}=Mt;function Zt(t){return figma.widget.h(Dt,{name:"Footer",direction:"horizontal",horizontalAlignItems:"start",width:"fill-parent",spacing:0,padding:{vertical:16,left:o.themes.layout.container.horizontal-16,right:o.themes.layout.container.horizontal-16},verticalAlignItems:"center"},t.children)}var Q=Zt;var{widget:zt}=figma,{AutoLayout:Wt,Text:Pt}=zt;function Gt(t){var i;return figma.widget.h(Wt,l(l({name:"Tag",cornerRadius:o.themes.radius.tag.cornerRadius,overflow:"visible",padding:{vertical:4,horizontal:8},width:"fill-parent",horizontalAlignItems:"center",verticalAlignItems:"center",onClick:()=>{var n;return(n=t.onClick)==null?void 0:n.call(t)}},o.themes.status[t.variant][t.theme]),(i=o.themes.status[t.variant])==null?void 0:i[t.theme].border),figma.widget.h(Pt,l({name:"Tag__input",width:"fill-parent",horizontalAlignText:"center",fill:o.themes.status[t.variant][t.theme].color},o.themes.typo.caption),t.content))}var X=Gt;var{widget:$t}=figma,{AutoLayout:tt}=$t;function St(t){return figma.widget.h(tt,{key:t.key,name:"ItemTag",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:0},figma.widget.h(tt,{name:"ItemTag__tag",direction:"horizontal",height:"hug-contents",width:120,padding:{right:24}},figma.widget.h(X,{theme:t.theme,variant:t.type,content:t.contentTag})),figma.widget.h(u,{theme:t.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:t.contentBody,placeholder:t.placeholderBody,disabled:Boolean(t.disabled),onEditEnd:i=>t.onEditEnd(i)}))}var et=St;var{widget:Ut}=figma,{SVG:Yt}=Ut,b={plus:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${t}"/></svg>`,more:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17V5H3V4ZM3 14H17V15H3V14ZM17 9H3V10H17V9Z" fill="${t}"/></svg>`,chevronUp:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${t}"/></svg>`,chevronDown:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${t}"/></svg>`,check:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${t}"/></svg>`,darkmode:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${t}"/></svg>`,descriptionNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${t}"/></svg>`,editingNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${t}"/></svg>`,checkNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${t}"/></svg>`,visible:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${t}"/></svg>`,hidden:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${t}"/></svg>`,info:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10.5 9V13.5H9.5V9H10.5ZM10.75 7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7Z" fill="${t}"/></svg>`,settings:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H14V5.05001C15.1411 5.28164 16 6.29052 16 7.5C16 8.70948 15.1411 9.71836 14 9.94999V17H13V9.94999C11.8589 9.71836 11 8.70948 11 7.5C11 6.29052 11.8589 5.28164 13 5.05001V3ZM12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM7 14.95C8.14112 14.7184 9 13.7095 9 12.5C9 11.2905 8.14112 10.2816 7 10.05V3H6V10.05C4.85888 10.2816 4 11.2905 4 12.5C4 13.7095 4.85888 14.7184 6 14.95V17H7V14.95Z" fill="${t}"/></svg>`};function Nt(t){return figma.widget.h(Yt,{name:"Icon",height:20,width:20,src:b[t.glyph](t.color)})}var it=Nt;var{widget:jt}=figma,{AutoLayout:Kt,Frame:qt,Text:Jt}=jt;function Qt(t){var i,n;return figma.widget.h(Kt,{name:"ButtonGhost",direction:"horizontal",height:o.themes.controls.size[(i=t.size)!=null?i:400],width:t.content?"hug-contents":o.themes.controls.size[(n=t.size)!=null?n:400],spacing:4,padding:{left:t.content&&t.glyph?12:t.content?16:0,right:t.content&&t.glyph||t.content?16:0},onClick:t.disabled?()=>{}:t.onClick,cornerRadius:o.themes.controls.radius.cornerRadius,hoverStyle:t.disabled?void 0:o.themes.controls.ghost.hover[t.theme],horizontalAlignItems:"center",verticalAlignItems:"center"},t.glyph&&figma.widget.h(qt,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(it,{glyph:t.glyph,color:t.disabled?o.themes.txt.minor.default[t.theme].color:o.themes.txt[t.variant?t.variant:"primary"].default[t.theme].color})),t.content&&figma.widget.h(Jt,d(l({},o.themes.typo.p6),{fill:t.disabled?o.themes.txt.minor.default[t.theme].color:o.themes.txt[t.variant?t.variant:"primary"].default[t.theme].color}),t.content))}var v=Qt;var{widget:Xt}=figma,{AutoLayout:W,Frame:te}=Xt;function ee(t){let i=t.positionUp!==void 0||t.positionDown!==void 0||t.more!==void 0;return figma.widget.h(W,{key:t.key,name:"Item",direction:"horizontal",spacing:0,padding:t.padding?t.padding:o.themes.layout.item,width:"fill-parent"},figma.widget.h(W,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},t.children),figma.widget.h(te,{height:32,width:1}),i&&figma.widget.h(W,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},t.positionUp!==void 0&&figma.widget.h(v,{theme:t.theme,glyph:"chevronUp",disabled:!t.positionUp,onClick:()=>{var n;return(n=t.onPositionChange)==null?void 0:n.call(t,{direction:"up"})}}),t.positionDown!==void 0&&figma.widget.h(v,{theme:t.theme,glyph:"chevronDown",disabled:!t.positionDown,onClick:()=>{var n;return(n=t.onPositionChange)==null?void 0:n.call(t,{direction:"down"})}}),t.more!==void 0&&figma.widget.h(v,{theme:t.theme,glyph:"more",disabled:t.more,onClick:()=>{var n;return(n=t.onMore)==null?void 0:n.call(t)}})))}var ot=ee;var ie=t=>{let i=String(new Date().toUTCString()).split(",")[1].trim().split(" "),n=i[3].split(":");return{full:`${i[0]} ${i[1]} ${i[2]}, ${n[0]}:${n[0]} ${i[4]}`,date:`${i[0]} ${i[1]} ${i[2]}`,time:`${n[0]}:${n[0]} ${i[4]}`}},nt=ie;var oe=t=>{let i=n=>(new Date().getMilliseconds()*100*n).toString(16);return i(t?1*t:1)+"-"+i(t?2*t:2)+"-"+i(t?4*t:4)+"-"+i(t?6*t:6)},lt=oe;var{widget:dt}=figma,{AutoLayout:P,Frame:ne,Text:rt,Input:Ze,Rectangle:ze,Image:We,SVG:Pe,Ellipse:Ge,Line:$e,Fragment:st,useSyncedState:at,useSyncedMap:le,usePropertyMenu:re,useEffect:se,useStickable:Se,useStickableHost:Ue,useWidgetId:Ye,register:Ne,waitForTask:je}=dt;function ae(){let[t,i]=at("data",{selectedEntry:void 0,isUIopen:!1,title:"1.0.0",date:nt(new Date).date,description:"",colorTheme:"light",colorRibbon:o.themes.status.dark.light.fill,isRibbonVisible:!0,isTitleVisible:!0,isDescriptionVisible:!1,isDateVisible:!0,isFooterVisible:!0,isBackgroundVisible:!0,isEditingVisible:!0}),[n,k]=at("entryType",Object.keys(g)[0]),a=le("entries");re([...t.isEditingVisible?[{itemType:"action",tooltip:"Settings",propertyName:"openSettings",icon:b.settings(o.themes.txt.minor.default.light.color)},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:t.colorTheme==="dark",icon:b.darkmode(t.colorTheme==="dark"?o.themes.txt.primary.inverted.light.color:o.themes.txt.minor.default.light.color)},{itemType:"color-selector",propertyName:"colorRibbon",tooltip:"Header color",selectedOption:t.colorRibbon,options:[{option:o.themes.status.error[t.colorTheme].fill,tooltip:"Red"},{option:o.themes.status.warning[t.colorTheme].fill,tooltip:"Orange"},{option:o.themes.status.important[t.colorTheme].fill,tooltip:"Yellow"},{option:o.themes.status.success[t.colorTheme].fill,tooltip:"Green"},{option:o.themes.status.secondary[t.colorTheme].fill,tooltip:"Cyan"},{option:o.themes.status.primary[t.colorTheme].fill,tooltip:"Blue"},{option:o.themes.status.info[t.colorTheme].fill,tooltip:"Purple"},{option:o.themes.status.dark[t.colorTheme].fill,tooltip:"Black"},{option:o.themes.status.disabled[t.colorTheme].fill,tooltip:"Grey"},{option:o.themes.status.white[t.colorTheme].fill,tooltip:"White"}]},{itemType:"separator"}]:[],{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!t.isEditingVisible,icon:b.editingNo(t.isEditingVisible?o.themes.txt.minor.default.light.color:o.themes.txt.primary.inverted.light.color)},...t.isEditingVisible?[{itemType:"separator"},{itemType:"dropdown",tooltip:"New entry type",propertyName:"entryType",options:Object.keys(g).map(e=>({option:e,label:g[e].label})),selectedOption:n},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:b.plus(o.themes.txt.minor.default.light.color)}]:[]],({propertyName:e,propertyValue:r})=>{if(e==="openSettings")return new Promise(h=>{L("settings",{data:t,entry:void 0})});e==="isEditingVisible"&&ft(),e==="colorTheme"&&ut(),e==="colorRibbon"&&T(r),e==="entryType"&&k(r),e==="addEntry"&&p(n)}),se(()=>{t.isUIopen&&E(),figma.on("close",()=>{i(d(l({},t),{isUIopen:!1}))}),figma.ui.onmessage=e=>{if(e.action==="ribbon"&&x(),e.action==="title"&&V(),e.action==="description"&&B(),e.action==="date"&&ht(),e.action==="footer"&&ct(),e.action==="background"&&gt(),e.action.indexOf("type")>-1&&bt(a.get(e.uuid),e.action),e.action==="move_up"&&F(a.get(e.uuid),"up"),e.action==="move_down"&&F(a.get(e.uuid),"down"),e.action==="duplicate"){let r=a.get(e.uuid);p(r.type,{position:r.position+.5,content:r.content,type:r.type}),figma.closePlugin()}e.action==="delete"&&(mt(a.get(e.uuid)),figma.closePlugin())}});let E=()=>{figma.ui.postMessage({data:t,entries:a.values(),entryTypes:g,tokens:o})},L=(e,r)=>{if(e==="settings")return new Promise(h=>{figma.showUI(__uiFiles__.settings,{themeColors:!0,title:"Settings",width:240,height:325}),i(d(l({},t),{isUIopen:!0,selectedEntry:void 0}))});if(e==="more")return new Promise(h=>{figma.showUI(__uiFiles__.more,{themeColors:!0,title:`Entry: ${r.entry.content.length?r.entry.content:"..."}`,width:240,height:259}),i(d(l({},t),{isUIopen:!0,selectedEntry:r.entry.uuid}))})},T=e=>{e&&i(d(l({},t),{colorRibbon:e}))},x=()=>{i(d(l({},t),{isRibbonVisible:!t.isRibbonVisible}))},V=()=>{i(d(l({},t),{isTitleVisible:!t.isTitleVisible}))},B=()=>{i(d(l({},t),{isDescriptionVisible:!t.isDescriptionVisible}))},ht=()=>{i(d(l({},t),{isDateVisible:!t.isDateVisible}))},ct=()=>{i(d(l({},t),{isFooterVisible:!t.isFooterVisible}))},gt=()=>{i(d(l({},t),{isBackgroundVisible:!t.isBackgroundVisible}))},ft=()=>{i(d(l({},t),{isEditingVisible:!t.isEditingVisible}))},ut=()=>{i(d(l({},t),{colorTheme:t.colorTheme==="dark"?"light":"dark"}))},p=(e,r)=>{let h=lt();a.get(h)?p(e):(a.set(h,l({uuid:h,position:a.values().length===0?0:a.values().length,type:e,content:""},r)),M())},H=(e,r)=>{i(d(l({},t),{[e]:r}))},F=(e,r)=>{let h=a.get(e.uuid);a.set(e.uuid,d(l({},e),{position:r==="up"?h.position-1.5:h.position+1.5})),M()},M=()=>{a.values().sort((e,r)=>e.position-r.position).forEach((e,r)=>{a.set(e.uuid,d(l({},e),{position:r}))})},mt=e=>{a.delete(e.uuid),M()},yt=(e,r)=>{a.set(e.uuid,d(l({},e),{content:r}))},bt=(e,r)=>{a.set(e.uuid,d(l({},e),{type:r.split("_")[1]}))};return figma.widget.h(P,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:t.isBackgroundVisible?o.themes.radius.container.cornerRadius:0,fill:t.isBackgroundVisible?o.themes.layer.default[t.colorTheme].fill:{r:0,g:0,b:0,a:0},width:800,effect:o.themes.shadow[t.isBackgroundVisible?"container":"transparent"][t.colorTheme]},t.isRibbonVisible&&figma.widget.h(ne,{name:"Widget__ribbon",fill:t.colorRibbon,width:"fill-parent",height:8}),figma.widget.h(J,{theme:t.colorTheme,title:t.title,isTitleVisible:t.isEditingVisible?t.isTitleVisible:t.isTitleVisible&&Boolean(t.title.length),isDescriptionVisible:t.isEditingVisible?t.isDescriptionVisible:t.isDescriptionVisible&&Boolean(t.description.length),description:t.description,disabled:!t.isEditingVisible,onTitleEditEnd:e=>H("title",e.characters),onDescriptionEditEnd:e=>H("description",e.characters),suffix:(t.isEditingVisible||Boolean(t.date.length))&&t.isDateVisible?figma.widget.h(u,{theme:t.colorTheme,variant:{typo:"p5",txt:"secondary"},content:t.date,placeholder:"...",disabled:!t.isEditingVisible,onEditEnd:e=>H("date",e.characters),style:{width:200,textAlign:"right"}}):void 0}),figma.widget.h(P,{name:"Widget__list",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},a.values().sort((e,r)=>e.position-r.position).map(e=>figma.widget.h(ot,{key:e.uuid,theme:t.colorTheme,positionUp:t.isEditingVisible?e.position!==0:void 0,positionDown:t.isEditingVisible?e.position!==a.values().length-1:void 0,more:t.isEditingVisible?!t.isEditingVisible:void 0,onPositionChange:r=>F(e,r.direction),onMore:()=>L("more",{data:t,entry:e})},figma.widget.h(et,{key:e.uuid,theme:t.colorTheme,type:g[e.type].status,contentBody:e.content,placeholderBody:"Type something...",disabled:!t.isEditingVisible,contentTag:g[e.type].label,onEditEnd:r=>yt(e,r.characters)}))),a.values().length===0&&figma.widget.h(rt,d(l({},o.themes.typo.p5),{fill:o.themes.txt.secondary.default[t.colorTheme].color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"What is your next update?")),t.isFooterVisible&&figma.widget.h(st,null,figma.widget.h(O,{theme:t.colorTheme}),figma.widget.h(Q,{theme:t.colorTheme},figma.widget.h(st,{key:"Footer__actions"},figma.widget.h(P,{key:"Footer__left",direction:"horizontal",horizontalAlignItems:"start",width:"fill-parent",verticalAlignItems:"center",padding:{left:16}},figma.widget.h(rt,d(l({key:"Footer__content"},o.themes.typo.p6),{fill:o.themes.txt.secondary.default[t.colorTheme].color,width:"fill-parent",horizontalAlignText:"left",height:32,verticalAlignText:"center"}),a.values().length===0?"No entries":a.values().length>1?`${a.values().length} entries`:`${a.values().length} entry`)),t.isEditingVisible&&figma.widget.h(v,{key:"Footer__action_addEntry",theme:t.colorTheme,variant:"primary",glyph:"plus",content:"Add entry",onClick:()=>p("added")})))))}dt.register(ae);})();
