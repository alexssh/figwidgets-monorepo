"use strict";(()=>{var It=Object.defineProperty,Dt=Object.defineProperties;var Ot=Object.getOwnPropertyDescriptors;var tt=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var et=(t,o,r)=>o in t?It(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(t,o)=>{for(var r in o||(o={}))Mt.call(o,r)&&et(t,r,o[r]);if(tt)for(var r of tt(o))Rt.call(o,r)&&et(t,r,o[r]);return t},d=(t,o)=>Dt(t,Ot(o));var u={check:{label:"Task"},title:{label:"Section"}},it={created:{label:"Added"},modified:{label:"Modified"},checked:{label:"Completed"},unchecked:{label:"Unchecked"}};var k="Inter",L="#000",c="#FFF",Bt="#EBEBEB",ot="#DDDDDD",M="#B4B4B4",x="#979797",$="#777";var R="#545454",lt="#424242",U="#252525",nt="#29B95F",f="#277DFF",E="#00B6F0",rt={r:0,g:.713,b:.9411,a:.12},st="#7522C5",B="#FAB020",dt={r:.98,g:.704,b:.128,a:.12},F="#FF730E",w="#D20000",at={r:.823,g:0,b:0,a:.12},Ft={themes:{typo:{h4:{fontFamily:k,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:k,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:k,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:k,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:k,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:k,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:k,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{light:{color:L},dark:{color:c}},inverted:{light:{color:c},dark:{color:L}}},secondary:{default:{light:{color:$},dark:{color:x}}},minor:{default:{light:{color:M},dark:{color:R}}},link:{default:{light:{color:f},dark:{color:f}}}},border:{divider:{light:{fill:ot},dark:{fill:lt}}},shadow:{container:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},transparent:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0}}},status:{success:{light:{fill:nt,color:c},dark:{fill:nt,color:c}},warning:{light:{fill:F,color:c},dark:{fill:F,color:c}},error:{light:{fill:w,color:c},dark:{fill:w,color:c}},important:{light:{fill:B,color:c},dark:{fill:B,color:c}},secondary:{light:{fill:E,color:c},dark:{fill:E,color:c}},primary:{light:{fill:f,color:c},dark:{fill:f,color:c}},info:{light:{fill:st,color:c},dark:{fill:st,color:c}},dark:{light:{fill:L,color:c},dark:{fill:L,color:c}},white:{light:{fill:c,color:c},dark:{fill:c,color:c}},light:{light:{fill:{r:0,g:0,b:0,a:0},color:$,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:{r:0,g:0,b:0,a:0},color:c,border:{stroke:ot,strokeWidth:1,strokeAlign:"inside"}}},disabled:{light:{fill:x,color:c},dark:{fill:x,color:c}}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},radius:{cornerRadius:4},ghost:{default:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}},hover:{light:{fill:Bt},dark:{fill:lt}},disabled:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}}},checkbox:{disabled:{light:{fill:c,border:{stroke:M,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:U,border:{stroke:R,strokeWidth:1,strokeAlign:"inside"}}},disabledActive:{light:{fill:M},dark:{fill:R}},hover:{light:{border:{stroke:f,strokeWidth:2,strokeAlign:"inside"}},dark:{border:{stroke:f,strokeWidth:2,strokeAlign:"inside"}}},empty0:{light:{fill:c,border:{stroke:$,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:U,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}}},active0:{light:{fill:L},dark:{fill:c}},empty1:{light:{fill:rt,border:{stroke:E,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:rt,border:{stroke:E,strokeWidth:1,strokeAlign:"inside"}}},active1:{light:{fill:E},dark:{fill:E}},empty2:{light:{fill:dt,border:{stroke:B,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:dt,border:{stroke:B,strokeWidth:1,strokeAlign:"inside"}}},active2:{light:{fill:F},dark:{fill:F}},empty3:{light:{fill:at,border:{stroke:w,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:at,border:{stroke:w,strokeWidth:1,strokeAlign:"inside"}}},active3:{light:{fill:w},dark:{fill:w}}}},layer:{default:{light:{fill:c},dark:{fill:U}},active:{light:{fill:f},dark:{fill:f}},disabled:{light:{fill:M},dark:{fill:R}}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}},i=Ft;var{widget:Ht}=figma,{Input:zt,Text:Pt,Fragment:St}=Ht;function Wt(t){var o,r,b,s,p,v,T,V,_;return figma.widget.h(St,null,!t.disabled&&figma.widget.h(zt,n(n({name:"InputGhost",inputBehavior:(o=t.type)!=null?o:"wrap",value:t.content,placeholder:t.placeholder,placeholderProps:{fill:i.themes.txt.minor.default[t.theme].color,opacity:1},width:(b=(r=t==null?void 0:t.style)==null?void 0:r.width)!=null?b:"fill-parent",onTextEditEnd:W=>t.onEditEnd(W),fill:i.themes.txt[t.variant.txt].default[t.theme].color,horizontalAlignText:(p=(s=t==null?void 0:t.style)==null?void 0:s.textAlign)!=null?p:"left",hoverStyle:{fill:i.themes.txt.link.default[t.theme].color}},i.themes.typo[t.variant.typo]),t==null?void 0:t.style)),t.disabled&&figma.widget.h(Pt,n(d(n({},i.themes.typo[t.variant.typo]),{fill:i.themes.txt[t.variant.txt].default[t.theme].color,width:(T=(v=t==null?void 0:t.style)==null?void 0:v.width)!=null?T:"fill-parent",horizontalAlignText:(_=(V=t==null?void 0:t.style)==null?void 0:V.textAlign)!=null?_:"left"}),t==null?void 0:t.style),t.content))}var m=Wt;var{widget:Zt}=figma,{Rectangle:$t}=Zt;function Ut(t){return figma.widget.h($t,{width:"fill-parent",height:1,fill:i.themes.border.divider[t.theme].fill})}var H=Ut;var{widget:Gt}=figma,{AutoLayout:G,Text:De,Fragment:Yt}=Gt;function Nt(t){return t.isTitleVisible||t.isDescriptionVisible||t.suffix!==void 0?figma.widget.h(Yt,null,figma.widget.h(G,{name:"Header",verticalAlignItems:"start",direction:"horizontal",spacing:24,width:"fill-parent",padding:i.themes.layout.container},figma.widget.h(G,{name:"Widget__row",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",height:t.isTitleVisible||t.isDescriptionVisible?"hug-contents":1},t.isTitleVisible&&figma.widget.h(m,{theme:t.theme,variant:{typo:"h4",txt:"primary"},content:t.title,placeholder:"Title",disabled:t.disabled,onEditEnd:o=>t.onTitleEditEnd(o)}),t.isDescriptionVisible&&figma.widget.h(m,{theme:t.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:t.description,placeholder:"Add any description...",disabled:t.disabled,onEditEnd:o=>t.onDescriptionEditEnd(o)})),t.suffix&&figma.widget.h(G,{name:"Widget__suffix",verticalAlignItems:"start",direction:"vertical",spacing:8,padding:{top:t.isTitleVisible?4:0},width:"hug-contents"},t.suffix)),figma.widget.h(H,{theme:t.theme})):figma.widget.h(figma.widget.Fragment,null)}var ct=Nt;var{widget:jt}=figma,{SVG:Kt}=jt,y={plus:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${t}"/></svg>`,more:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17V5H3V4ZM3 14H17V15H3V14ZM17 9H3V10H17V9Z" fill="${t}"/></svg>`,chevronUp:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${t}"/></svg>`,chevronDown:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${t}"/></svg>`,check:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${t}"/></svg>`,darkmode:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${t}"/></svg>`,descriptionNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${t}"/></svg>`,editingNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${t}"/></svg>`,checkNo:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${t}"/></svg>`,visible:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${t}"/></svg>`,hidden:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${t}"/></svg>`,info:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10.5 9V13.5H9.5V9H10.5ZM10.75 7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7Z" fill="${t}"/></svg>`,settings:t=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H14V5.05001C15.1411 5.28164 16 6.29052 16 7.5C16 8.70948 15.1411 9.71836 14 9.94999V17H13V9.94999C11.8589 9.71836 11 8.70948 11 7.5C11 6.29052 11.8589 5.28164 13 5.05001V3ZM12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM7 14.95C8.14112 14.7184 9 13.7095 9 12.5C9 11.2905 8.14112 10.2816 7 10.05V3H6V10.05C4.85888 10.2816 4 11.2905 4 12.5C4 13.7095 4.85888 14.7184 6 14.95V17H7V14.95Z" fill="${t}"/></svg>`};function qt(t){return figma.widget.h(Kt,{name:"Icon",height:20,width:20,src:y[t.glyph](t.color)})}var z=qt;var{widget:Jt}=figma,{AutoLayout:Qt}=Jt;function Xt(t){var r,b;let o=t.value?`active${t.priority}`:`empty${t.priority}`;return figma.widget.h(Qt,d(n({name:"Checkbox",direction:"horizontal",height:i.themes.controls.size[(r=t.size)!=null?r:200],width:i.themes.controls.size[(b=t.size)!=null?b:200],spacing:0,padding:0,onClick:t.onClick,cornerRadius:i.themes.controls.radius.cornerRadius,horizontalAlignItems:"center",verticalAlignItems:"center",fill:i.themes.controls.checkbox[t.disabled?t.value?"disabledActive":"disabled":o][t.theme].fill},i.themes.controls.checkbox[t.disabled?t.value?"disabledActive":"disabled":o][t.theme].border),{hoverStyle:t.disabled?{}:i.themes.controls.checkbox.hover[t.theme].border}),t.value&&figma.widget.h(z,{glyph:"check",color:i.themes.txt.primary.inverted[t.theme].color}))}var ht=Xt;var{widget:te}=figma,{AutoLayout:P,Text:ee}=te;function ie(t){return figma.widget.h(P,{key:t.key,name:"ItemCheckbox",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:0},figma.widget.h(P,{name:"ItemCheckbox__tag",direction:"horizontal",height:"hug-contents",width:"hug-contents",padding:{right:16}},figma.widget.h(ht,{theme:t.theme,value:t.value,disabled:t.disabledCheckbox,onClick:t.onCheckboxChange,priority:t.priority})),figma.widget.h(P,{name:"ItemCheckbox__content",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:8,padding:{right:16}},figma.widget.h(P,{name:"ItemCheckbox__contentBody",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:5},figma.widget.h(m,{theme:t.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:t.contentTitle,placeholder:t.placeholderTitle,disabled:Boolean(t.disabled),onEditEnd:o=>t.onEditEnd({property:"title",value:o}),style:t.value&&t.contentTitle.length>0?{textDecoration:"strikethrough",fill:i.themes.txt.secondary.default[t.theme].color}:{}}),t.isDescriptionVisible&&figma.widget.h(m,{theme:t.theme,variant:{typo:"p6",txt:"secondary"},type:"multiline",content:t.contentDescription,placeholder:t.placeholderDescription,disabled:Boolean(t.disabled),onEditEnd:o=>t.onEditEnd({property:"description",value:o})})),t.contentMeta&&figma.widget.h(ee,d(n({key:"Footer__content"},i.themes.typo.p6),{fill:i.themes.txt.secondary.default[t.theme].color,width:"fill-parent",horizontalAlignText:"left"}),t.contentMeta)))}var gt=ie;var{widget:oe}=figma,{AutoLayout:le}=oe;function ne(t){return figma.widget.h(le,{key:t.key,name:"ItemTitle",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:5,padding:{top:0,left:0,bottom:t.isDescriptionVisible?8:0,right:0}},figma.widget.h(m,{theme:t.theme,variant:{typo:"h5",txt:"primary"},type:"multiline",content:t.contentTitle,placeholder:t.placeholderTitle,disabled:Boolean(t.disabled),onEditEnd:o=>t.onEditEnd({property:"title",value:o})}),t.isDescriptionVisible&&figma.widget.h(m,{theme:t.theme,variant:{typo:"p6",txt:"secondary"},type:"multiline",content:t.contentDescription,placeholder:t.placeholderDescription,disabled:Boolean(t.disabled),onEditEnd:o=>t.onEditEnd({property:"description",value:o})}))}var mt=ne;var{widget:re}=figma,{AutoLayout:se,Frame:de,Text:ae}=re;function ce(t){var o,r;return figma.widget.h(se,{name:"ButtonGhost",direction:"horizontal",height:i.themes.controls.size[(o=t.size)!=null?o:400],width:t.content?"hug-contents":i.themes.controls.size[(r=t.size)!=null?r:400],spacing:4,padding:{left:t.content&&t.glyph?12:t.content?16:0,right:t.content&&t.glyph||t.content?16:0},onClick:t.disabled?()=>{}:t.onClick,cornerRadius:i.themes.controls.radius.cornerRadius,hoverStyle:t.disabled?void 0:i.themes.controls.ghost.hover[t.theme],horizontalAlignItems:"center",verticalAlignItems:"center"},t.glyph&&figma.widget.h(de,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(z,{glyph:t.glyph,color:t.disabled?i.themes.txt.minor.default[t.theme].color:i.themes.txt[t.variant?t.variant:"primary"].default[t.theme].color})),t.content&&figma.widget.h(ae,d(n({},i.themes.typo.p6),{fill:t.disabled?i.themes.txt.minor.default[t.theme].color:i.themes.txt[t.variant?t.variant:"primary"].default[t.theme].color}),t.content))}var C=ce;var{widget:he}=figma,{AutoLayout:Y,Frame:ge}=he;function me(t){let o=t.positionUp!==void 0||t.positionDown!==void 0||t.more!==void 0;return figma.widget.h(Y,{key:t.key,name:"Item",direction:"horizontal",spacing:0,padding:t.padding?t.padding:i.themes.layout.item,width:"fill-parent"},figma.widget.h(Y,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},t.children),figma.widget.h(ge,{height:32,width:1}),o&&figma.widget.h(Y,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},t.positionUp!==void 0&&figma.widget.h(C,{theme:t.theme,glyph:"chevronUp",disabled:!t.positionUp,onClick:()=>{var r;return(r=t.onPositionChange)==null?void 0:r.call(t,{direction:"up"})}}),t.positionDown!==void 0&&figma.widget.h(C,{theme:t.theme,glyph:"chevronDown",disabled:!t.positionDown,onClick:()=>{var r;return(r=t.onPositionChange)==null?void 0:r.call(t,{direction:"down"})}}),t.more!==void 0&&figma.widget.h(C,{theme:t.theme,glyph:"more",disabled:t.more,onClick:()=>{var r;return(r=t.onMore)==null?void 0:r.call(t)}})))}var N=me;var{widget:ue}=figma,{AutoLayout:fe,Text:Qe}=ue;function be(t){return figma.widget.h(fe,{name:"Footer",direction:"horizontal",horizontalAlignItems:"start",width:"fill-parent",spacing:0,padding:{vertical:16,left:i.themes.layout.container.horizontal-16,right:i.themes.layout.container.horizontal-16},verticalAlignItems:"center"},t.children)}var ut=be;var ke=t=>{let o=String(new Date().toUTCString()).split(",")[1].trim().split(" "),r=o[3].split(":");return{full:`${o[0]} ${o[1]} ${o[2]}, ${r[0]}:${r[0]} ${o[4]}`,date:`${o[0]} ${o[1]} ${o[2]}`,time:`${r[0]}:${r[0]} ${o[4]}`}},ft=ke;var ye=t=>{let o=r=>(new Date().getMilliseconds()*100*r).toString(16);return o(t?1*t:1)+"-"+o(t?2*t:2)+"-"+o(t?4*t:4)+"-"+o(t?6*t:6)},bt=ye;var{widget:yt}=figma,{AutoLayout:S,Frame:Ce,Text:j,Input:oi,Rectangle:li,Image:ni,SVG:ri,Ellipse:si,Line:di,Fragment:K,useSyncedState:kt,useSyncedMap:ve,usePropertyMenu:Ee,useEffect:we,useStickable:ai,useStickableHost:ci,useWidgetId:hi,register:gi,waitForTask:mi}=yt;function Le(){let[t,o]=kt("data",{selectedEntry:void 0,isUIopen:!1,title:"My checklist",description:"",colorRibbon:i.themes.status.dark.light.fill,colorTheme:"light",width:800,isRibbonVisible:!0,isTitleVisible:!0,isDescriptionVisible:!1,isEditingVisible:!0,isChecksAllowed:!0,isCompletedVisible:!0,isMetadataVisible:!1,isFooterVisible:!0,isBackgroundVisible:!0}),[r,b]=kt("entryType",Object.keys(u)[0]),s=ve("entries");Ee([...t.isEditingVisible?[{itemType:"action",tooltip:"Settings",propertyName:"openSettings",icon:y.settings(i.themes.txt.minor.default.light.color)},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:t.colorTheme==="dark",icon:y.darkmode(t.colorTheme==="dark"?i.themes.txt.primary.inverted.light.color:i.themes.txt.minor.default.light.color)},{itemType:"color-selector",propertyName:"colorRibbon",tooltip:"Header color",selectedOption:t.colorRibbon,options:[{option:i.themes.status.error[t.colorTheme].fill,tooltip:"Red"},{option:i.themes.status.warning[t.colorTheme].fill,tooltip:"Orange"},{option:i.themes.status.important[t.colorTheme].fill,tooltip:"Yellow"},{option:i.themes.status.success[t.colorTheme].fill,tooltip:"Green"},{option:i.themes.status.secondary[t.colorTheme].fill,tooltip:"Cyan"},{option:i.themes.status.primary[t.colorTheme].fill,tooltip:"Blue"},{option:i.themes.status.info[t.colorTheme].fill,tooltip:"Purple"},{option:i.themes.status.dark[t.colorTheme].fill,tooltip:"Black"},{option:i.themes.status.disabled[t.colorTheme].fill,tooltip:"Grey"},{option:i.themes.status.white[t.colorTheme].fill,tooltip:"White"}]},{itemType:"separator"}]:[],{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!t.isEditingVisible,icon:y.editingNo(t.isEditingVisible?i.themes.txt.minor.default.light.color:i.themes.txt.primary.inverted.light.color)},{itemType:"toggle",tooltip:"Enable/disable checkboxes",propertyName:"isChecksAllowed",isToggled:!t.isChecksAllowed,icon:y.checkNo(t.isChecksAllowed?i.themes.txt.minor.default.light.color:i.themes.txt.primary.inverted.light.color)},...t.isEditingVisible?[{itemType:"separator"},{itemType:"dropdown",tooltip:"New entry type",propertyName:"entryType",options:Object.keys(u).map(e=>({option:e,label:u[e].label})),selectedOption:r},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:y.plus(i.themes.txt.minor.default.light.color)}]:[]],({propertyName:e,propertyValue:l})=>{if(e==="openSettings")return new Promise(a=>{v("settings",{data:t,entry:void 0})});e==="isEditingVisible"&&T(),e==="isChecksAllowed"&&V(),e==="colorTheme"&&_(),e==="colorRibbon"&&W(l),e==="entryType"&&b(l),e==="addEntry"&&A(r)}),we(()=>{t.isUIopen&&p(),figma.on("close",()=>{o(d(n({},t),{isUIopen:!1}))}),figma.ui.onmessage=e=>{if(e.action==="metadata"&&wt(),e.action==="completed_tasks"&&q(),e.action==="ribbon"&&Ct(),e.action==="title"&&vt(),e.action==="description"&&Et(),e.action.indexOf("width")>-1&&pt(e.action),e.action==="footer"&&Lt(),e.action==="background"&&xt(),e.action==="priority_0"&&(D(s.get(e.uuid),0),figma.closePlugin()),e.action==="priority_1"&&(D(s.get(e.uuid),1),figma.closePlugin()),e.action==="priority_2"&&(D(s.get(e.uuid),2),figma.closePlugin()),e.action==="priority_3"&&(D(s.get(e.uuid),3),figma.closePlugin()),e.action==="move_up"&&I(s.get(e.uuid),"up"),e.action==="move_down"&&I(s.get(e.uuid),"down"),e.action==="show_description"&&(Q(s.get(e.uuid)),figma.closePlugin()),e.action==="hide_description"&&Q(s.get(e.uuid)),e.action==="duplicate"){let l=s.get(e.uuid);A(l.type,{position:l.position+.5,value:l.value,title:l.title,isDescriptionVisible:l.isDescriptionVisible,description:l.description,priority:l.priority}),figma.closePlugin()}e.action==="delete"&&(Vt(s.get(e.uuid)),figma.closePlugin())}});let p=()=>{figma.ui.postMessage({data:t,entries:s.values().filter(e=>t.isCompletedVisible?!0:!e.value)})},v=(e,l)=>{if(e==="settings")return new Promise(a=>{figma.showUI(__uiFiles__.settings,{themeColors:!0,title:"Settings",width:240,height:454}),o(d(n({},t),{isUIopen:!0,selectedEntry:void 0}))});if(e==="more-checkbox")return new Promise(a=>{figma.showUI(__uiFiles__.more_checkbox,{themeColors:!0,title:`Task: ${l.entry.title.length?l.entry.title:"..."}`,width:240,height:337}),o(d(n({},t),{isUIopen:!0,selectedEntry:l.entry.uuid}))});if(e==="more-title")return new Promise(a=>{figma.showUI(__uiFiles__.more_title,{themeColors:!0,title:`Section: ${l.entry.title.length?l.entry.title:"..."}`,width:240,height:240}),o(d(n({},t),{isUIopen:!0,selectedEntry:l.entry.uuid}))})},T=()=>{o(d(n({},t),{isEditingVisible:!t.isEditingVisible}))},V=()=>{o(d(n({},t),{isChecksAllowed:!t.isChecksAllowed}))},_=()=>{o(d(n({},t),{colorTheme:t.colorTheme==="dark"?"light":"dark"}))},W=e=>{e&&o(d(n({},t),{colorRibbon:e}))},q=()=>{o(d(n({},t),{isCompletedVisible:!t.isCompletedVisible}))},Ct=()=>{o(d(n({},t),{isRibbonVisible:!t.isRibbonVisible}))},vt=()=>{o(d(n({},t),{isTitleVisible:!t.isTitleVisible}))},Et=()=>{o(d(n({},t),{isDescriptionVisible:!t.isDescriptionVisible}))},wt=()=>{o(d(n({},t),{isMetadataVisible:!t.isMetadataVisible}))},Lt=()=>{o(d(n({},t),{isFooterVisible:!t.isFooterVisible}))},xt=()=>{o(d(n({},t),{isBackgroundVisible:!t.isBackgroundVisible}))},pt=e=>{o(d(n({},t),{width:parseInt(e.split("_")[1])}))},A=(e,l)=>{var h,g;let a=bt();s.get(a)?A(e):(s.set(a,n({uuid:a,value:!1,position:s.values().length===0?0:s.values().length,type:e,title:"",isDescriptionVisible:!1,description:"",priority:0,actor:(g=(h=figma.currentUser)==null?void 0:h.name)!=null?g:"Anonymous",timestamp:ft(new Date).full,action:"created"},l)),Z())},I=(e,l)=>{let a=s.get(e.uuid);s.set(e.uuid,d(n({},e),{position:t.isCompletedVisible?l==="up"?a.position-1.5:a.position+1.5:Tt(e.position,s.values().sort((h,g)=>h.position-g.position),l)})),Z()},Tt=(e,l,a)=>{if(a==="up"){let h=l.slice(0,e),g=h.length-1;for(;g>=0&&(h[g].value&&h[g].type==="check");)g--;return g-.5}else{let h=l.slice(e+1,l.length),g=0;for(;g<h.length;)if(h[g].value&&h[g].type==="check")g++;else{g++;break}return e+g+.5}},Z=()=>{s.values().sort((e,l)=>e.position-l.position).forEach((e,l)=>{s.set(e.uuid,d(n({},e),{position:l}))})},Vt=e=>{s.delete(e.uuid),Z()},J=(e,l)=>{var a,h;s.set(e.uuid,d(n({},e),{actor:(h=(a=figma.currentUser)==null?void 0:a.name)!=null?h:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:"modified",[l.property]:l.value.characters}))},_t=e=>{var l,a;s.set(e.uuid,d(n({},e),{value:!e.value,actor:(a=(l=figma.currentUser)==null?void 0:l.name)!=null?a:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:e.value?"unchecked":"checked"}))},D=(e,l)=>{var a,h;s.set(e.uuid,d(n({},e),{priority:l,actor:(h=(a=figma.currentUser)==null?void 0:a.name)!=null?h:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:"modified"}))},Q=e=>{var l,a;s.set(e.uuid,d(n({},e),{isDescriptionVisible:!e.isDescriptionVisible,actor:(a=(l=figma.currentUser)==null?void 0:l.name)!=null?a:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:"modified"}))},X=(e,l)=>{o(d(n({},t),{[e]:l}))},At=e=>Boolean(e.action)&&Boolean(e.actor)&&Boolean(e.timestamp)?`${it[e.action].label} \xB7 ${e.actor} \xB7 ${e.timestamp}`:"Modify this task to update this meta info",O=s.values().filter(e=>t.isCompletedVisible?!0:e.type==="check"?!e.value:!0);return figma.widget.h(S,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:t.isBackgroundVisible?i.themes.radius.container.cornerRadius:0,fill:t.isBackgroundVisible?i.themes.layer.default[t.colorTheme].fill:{r:0,g:0,b:0,a:0},width:t.width,effect:i.themes.shadow[t.isBackgroundVisible?"container":"transparent"][t.colorTheme]},t.isRibbonVisible&&figma.widget.h(Ce,{name:"Widget__ribbon",fill:t.colorRibbon,width:"fill-parent",height:8}),figma.widget.h(ct,{theme:t.colorTheme,title:t.title,isTitleVisible:t.isEditingVisible?t.isTitleVisible:t.isTitleVisible&&Boolean(t.title.length),isDescriptionVisible:t.isEditingVisible?t.isDescriptionVisible:t.isDescriptionVisible&&Boolean(t.description.length),description:t.description,disabled:!t.isEditingVisible,onTitleEditEnd:e=>X("title",e.characters),onDescriptionEditEnd:e=>X("description",e.characters)}),figma.widget.h(S,{name:"Widget__list",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},Boolean(O.length)?O.sort((e,l)=>e.position-l.position).map((e,l)=>{if(e.type===Object.keys(u)[0])return figma.widget.h(N,{key:e.uuid,theme:t.colorTheme,positionUp:t.isEditingVisible?l!==0:void 0,positionDown:t.isEditingVisible?l!==O.length-1:void 0,more:t.isEditingVisible?!t.isEditingVisible:void 0,padding:{vertical:8,horizontal:i.themes.layout.item.horizontal},onPositionChange:a=>I(e,a.direction),onMore:()=>v("more-checkbox",{data:t,entry:e})},figma.widget.h(gt,{key:e.uuid,theme:t.colorTheme,value:Boolean(e.value),contentTitle:e.title,isDescriptionVisible:e.isDescriptionVisible,contentDescription:e.description,contentMeta:t.isMetadataVisible?At(e):void 0,placeholderTitle:"Title...",placeholderDescription:"Description...",disabled:!t.isEditingVisible,disabledCheckbox:!t.isChecksAllowed,priority:e.priority,onEditEnd:a=>J(e,a),onCheckboxChange:()=>t.isChecksAllowed?_t(e):null}));if(e.type===Object.keys(u)[1])return figma.widget.h(N,{key:e.uuid,theme:t.colorTheme,positionUp:t.isEditingVisible?l!==0:void 0,positionDown:t.isEditingVisible?l!==O.length-1:void 0,more:t.isEditingVisible?!t.isEditingVisible:void 0,padding:{top:l===0?8:24,bottom:8,horizontal:i.themes.layout.item.horizontal},onPositionChange:a=>I(e,a.direction),onMore:()=>v("more-title",{data:t,entry:e})},figma.widget.h(mt,{key:e.uuid,theme:t.colorTheme,contentTitle:e.title,placeholderTitle:"Type something...",isDescriptionVisible:e.isDescriptionVisible,contentDescription:e.description,placeholderDescription:"Description...",disabled:!t.isEditingVisible,onEditEnd:a=>J(e,a)}))}):figma.widget.h(K,null),s.values().filter(e=>t.isCompletedVisible?!0:!e.value).length===0&&s.values().length>0&&figma.widget.h(j,d(n({},i.themes.typo.p5),{fill:i.themes.txt.secondary.default[t.colorTheme].color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"All done. Enjoy your time!"),s.values().length===0&&figma.widget.h(j,d(n({},i.themes.typo.p5),{fill:i.themes.txt.secondary.default[t.colorTheme].color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"What is your next challenge?")),t.isFooterVisible&&figma.widget.h(K,null,figma.widget.h(H,{theme:t.colorTheme}),figma.widget.h(ut,{theme:t.colorTheme},figma.widget.h(S,{key:"Footer__left",direction:"horizontal",horizontalAlignItems:"start",width:"fill-parent",verticalAlignItems:"center"},s.values().length===0&&figma.widget.h(S,{key:"Footer__empty",padding:{left:16}},figma.widget.h(j,d(n({key:"Footer__content"},i.themes.typo.p6),{fill:i.themes.txt.secondary.default[t.colorTheme].color,width:"fill-parent",horizontalAlignText:"left",height:32,verticalAlignText:"center"}),"No tasks")),s.values().length>0&&figma.widget.h(C,{key:"Footer__action_hideCompleted",theme:t.colorTheme,variant:"secondary",glyph:t.isCompletedVisible?"visible":"hidden",content:`Completed ${s.values().filter(e=>e.type===Object.keys(u)[0]&&e.value).length} of ${s.values().filter(e=>e.type===Object.keys(u)[0]).length}`,onClick:()=>q()})),t.isEditingVisible&&figma.widget.h(K,{key:"Footer__actions"},figma.widget.h(C,{key:"Footer__action_addTask",theme:t.colorTheme,variant:"primary",glyph:"plus",content:"Add task",onClick:()=>A("check")})))))}yt.register(Le);})();
