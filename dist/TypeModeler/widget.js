"use strict";(()=>{var Oe=Object.defineProperty,Ee=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Q=(e,o,a)=>o in e?Oe(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,l=(e,o)=>{for(var a in o||(o={}))Ve.call(o,a)&&Q(e,a,o[a]);if(q)for(var a of q(o))He.call(o,a)&&Q(e,a,o[a]);return e},r=(e,o)=>Ee(e,_e(o));var c={header:{label:"Header"},entry:{label:"Attribute"}},h={none:{label:"No key"},pk:{label:"Primary key (PK)"},uk:{label:"Unique key (UK)"},sk:{label:"Super key (SK)"},fk:{label:"Foreign key (FK)"},ak:{label:"Alternate key (AK)"},ck:{label:"Candidate key (CK)"},cpk:{label:"Composite key (CPK)"}};var C="Inter",_="#000",d="#FFF",Ae="#EBEBEB",Z="#DDDDDD",M="#B4B4B4",V="#979797",S="#777";var P="#545454",z="#424242",F="#252525",X="#29B95F",b="#277DFF",x="#00B6F0",ee={r:0,g:.713,b:.9411,a:.12},te="#7522C5",T="#FAB020",ie={r:.98,g:.704,b:.128,a:.12},oe="#FF730E",k="#D20000",le={r:.823,g:0,b:0,a:.12},Re={themes:{typo:{h4:{fontFamily:C,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:C,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:C,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:C,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:C,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:C,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:C,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{light:{color:_},dark:{color:d}},inverted:{light:{color:d},dark:{color:_}}},secondary:{default:{light:{color:S},dark:{color:V}}},minor:{default:{light:{color:M},dark:{color:P}}},link:{default:{light:{color:b},dark:{color:b}}},error:{default:{light:{color:k},dark:{color:k}}}},border:{divider:{light:{fill:Z},dark:{fill:z}},container:{light:{fill:Z},dark:{fill:z}}},shadow:{container:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},transparent:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0}}},status:{success:{light:{fill:X,color:d},dark:{fill:X,color:d}},warning:{light:{fill:oe,color:d},dark:{fill:oe,color:d}},error:{light:{fill:k,color:d},dark:{fill:k,color:d}},important:{light:{fill:T,color:d},dark:{fill:T,color:d}},secondary:{light:{fill:x,color:d},dark:{fill:x,color:d}},primary:{light:{fill:b,color:d},dark:{fill:b,color:d}},info:{light:{fill:te,color:d},dark:{fill:te,color:d}},dark:{light:{fill:_,color:d},dark:{fill:_,color:d}},white:{light:{fill:d,color:d},dark:{fill:d,color:d}},light:{light:{fill:{r:0,g:0,b:0,a:0},color:S,border:{stroke:V,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:{r:0,g:0,b:0,a:0},color:d,border:{stroke:Z,strokeWidth:1,strokeAlign:"inside"}}},disabled:{light:{fill:V,color:d},dark:{fill:V,color:d}}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},radius:{cornerRadius:4},ghost:{default:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}},hover:{light:{fill:Ae},dark:{fill:z}},disabled:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}}},checkbox:{disabled:{light:{fill:d,border:{stroke:M,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:F,border:{stroke:P,strokeWidth:1,strokeAlign:"inside"}}},disabledActive:{light:{fill:M},dark:{fill:P}},hover:{light:{border:{stroke:b,strokeWidth:2,strokeAlign:"inside"}},dark:{border:{stroke:b,strokeWidth:2,strokeAlign:"inside"}}},empty0:{light:{fill:d,border:{stroke:S,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:F,border:{stroke:V,strokeWidth:1,strokeAlign:"inside"}}},active0:{light:{fill:_},dark:{fill:d}},empty1:{light:{fill:ee,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:ee,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}}},active1:{light:{fill:x},dark:{fill:x}},empty2:{light:{fill:ie,border:{stroke:T,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:ie,border:{stroke:T,strokeWidth:1,strokeAlign:"inside"}}},active2:{light:{fill:T},dark:{fill:T}},empty3:{light:{fill:le,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:le,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"}}},active3:{light:{fill:k},dark:{fill:k}}}},layer:{default:{light:{fill:d},dark:{fill:F}},active:{light:{fill:b},dark:{fill:b}},disabled:{light:{fill:M},dark:{fill:P}}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}},i=Re;var{widget:Me}=figma,{Input:Pe,Text:De,Fragment:Be}=Me;function We(e){var o,a,w,u,O,L,H,A,R;return figma.widget.h(Be,null,!e.disabled&&figma.widget.h(Pe,l(l({name:"InputGhost",inputBehavior:(o=e.type)!=null?o:"wrap",value:e.content,placeholder:e.placeholder,placeholderProps:{fill:i.themes.txt.minor.default[e.theme].color,opacity:1},width:(w=(a=e==null?void 0:e.style)==null?void 0:a.width)!=null?w:"fill-parent",onTextEditEnd:B=>e.onEditEnd(B),fill:i.themes.txt[e.variant.txt].default[e.theme].color,horizontalAlignText:(O=(u=e==null?void 0:e.style)==null?void 0:u.textAlign)!=null?O:"left",hoverStyle:{fill:i.themes.txt.link.default[e.theme].color}},i.themes.typo[e.variant.typo]),e==null?void 0:e.style)),e.disabled&&figma.widget.h(De,l(r(l({},i.themes.typo[e.variant.typo]),{fill:i.themes.txt[e.variant.txt].default[e.theme].color,width:(H=(L=e==null?void 0:e.style)==null?void 0:L.width)!=null?H:"fill-parent",horizontalAlignText:(R=(A=e==null?void 0:e.style)==null?void 0:A.textAlign)!=null?R:"left"}),e==null?void 0:e.style),e.content))}var v=We;var{widget:Ze}=figma,{Rectangle:Se}=Ze;function ze(e){return figma.widget.h(Se,{width:"fill-parent",height:1,fill:i.themes.border.divider[e.theme].fill})}var ne=ze;var{widget:Fe}=figma,{SVG:Ge}=Fe,p={plus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${e}"/></svg>`,more:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17V5H3V4ZM3 14H17V15H3V14ZM17 9H3V10H17V9Z" fill="${e}"/></svg>`,chevronUp:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${e}"/></svg>`,chevronDown:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${e}"/></svg>`,check:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${e}"/></svg>`,darkmode:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${e}"/></svg>`,descriptionNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${e}"/></svg>`,editingNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${e}"/></svg>`,checkNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${e}"/></svg>`,visible:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${e}"/></svg>`,hidden:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${e}"/></svg>`,info:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10.5 9V13.5H9.5V9H10.5ZM10.75 7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7Z" fill="${e}"/></svg>`,settings:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H14V5.05001C15.1411 5.28164 16 6.29052 16 7.5C16 8.70948 15.1411 9.71836 14 9.94999V17H13V9.94999C11.8589 9.71836 11 8.70948 11 7.5C11 6.29052 11.8589 5.28164 13 5.05001V3ZM12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM7 14.95C8.14112 14.7184 9 13.7095 9 12.5C9 11.2905 8.14112 10.2816 7 10.05V3H6V10.05C4.85888 10.2816 4 11.2905 4 12.5C4 13.7095 4.85888 14.7184 6 14.95V17H7V14.95Z" fill="${e}"/></svg>`,link:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0251 4.02513C12.392 2.65829 14.608 2.65829 15.9749 4.02513C17.3417 5.39196 17.3417 7.60804 15.9749 8.97487L13.8536 11.0962L13.1464 10.3891L15.2678 8.26777C16.2441 7.29146 16.2441 5.70854 15.2678 4.73223C14.2915 3.75592 12.7085 3.75592 11.7322 4.73223L9.61091 6.85355L8.90381 6.14645L11.0251 4.02513ZM8.97487 15.9749C7.60804 17.3417 5.39196 17.3417 4.02513 15.9749C2.65829 14.608 2.65829 12.392 4.02513 11.0251L6.14645 8.90381L6.85355 9.61092L4.73223 11.7322C3.75592 12.7086 3.75592 14.2915 4.73223 15.2678C5.70854 16.2441 7.29146 16.2441 8.26777 15.2678L10.3891 13.1465L11.0962 13.8536L8.97487 15.9749ZM12.4645 8.20916L11.7574 7.50205L7.4665 11.7929L8.17361 12.5L12.4645 8.20916Z" fill="${e}"/></svg>`,key:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 14.4142L8.45415 9.96006L8.23762 9.36213C8.08414 8.9383 8 8.48008 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C11.5199 12 11.0617 11.9159 10.6379 11.7624L10.0399 11.5458L5.58579 16H4V14.4142ZM3 17H6L10.2974 12.7026C10.8288 12.8951 11.4021 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 8.59785 7.10493 9.1712 7.29737 9.70263L3 14V17ZM13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z" fill="${e}"/></svg>`,duplicate:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4H9C8.44772 4 8 4.44772 8 5V6H7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V11C17 12.1046 16.1046 13 15 13H14V12H15C15.5523 12 16 11.5523 16 11V5C16 4.44772 15.5523 4 15 4ZM4 9C4 8.44772 4.44772 8 5 8H11C11.5523 8 12 8.44772 12 9V15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15V9ZM3 9C3 7.89543 3.89543 7 5 7H11C12.1046 7 13 7.89543 13 9V15C13 16.1046 12.1046 17 11 17H5C3.89543 17 3 16.1046 3 15V9Z" fill="${e}"/></svg>`,asterisk:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4H10.5V9.13401L14.9463 6.56696L15.4463 7.43298L11.0001 9.99999L15.4463 12.567L14.9463 13.433L10.5 10.866V16H9.5V10.8661L5.05396 13.433L4.55396 12.567L9.00007 9.99999L4.55398 7.43304L5.05398 6.56702L9.5 9.13392V4Z" fill="${e}"/></svg>`};function je(e){var o,a;return figma.widget.h(Ge,{name:"Icon",height:(o=e.size)!=null?o:20,width:(a=e.size)!=null?a:20,src:p[e.glyph](e.color)})}var I=je;var{widget:Ne}=figma,{AutoLayout:Ue}=Ne;function $e(e){return figma.widget.h(Ue,{key:e.key,name:"LinkBox",direction:"horizontal",height:"hug-contents",width:"fill-parent",spacing:4},figma.widget.h(I,{glyph:"link",size:16,color:e.contentTitle.length===0?i.themes.txt.minor.default[e.theme].color:e.valid?i.themes.txt.secondary.default[e.theme].color:i.themes.txt.error.default[e.theme].color}),figma.widget.h(v,{theme:e.theme,variant:{typo:"p6",txt:e.contentTitle.length===0?"minor":e.valid?"secondary":"error"},type:"truncate",content:e.contentTitle,placeholder:e.placeholderTitle,disabled:Boolean(e.disabled),onEditEnd:o=>e.onEditEnd(o),style:{href:e.valid?e.contentTitle:"",textDecoration:e.valid?"underline":"none"}}))}var ae=$e;var{widget:Ke}=figma,{AutoLayout:G,Text:_t,Fragment:Ye}=Ke;function Je(e){return e.isTitleVisible||e.isDescriptionVisible||e.suffix!==void 0?figma.widget.h(Ye,null,figma.widget.h(G,{name:"Header",verticalAlignItems:"start",direction:"horizontal",spacing:24,width:"fill-parent",padding:i.themes.layout.container},figma.widget.h(G,{name:"Widget__row",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",height:e.isTitleVisible||e.isDescriptionVisible?"hug-contents":1},e.isTitleVisible&&figma.widget.h(v,{theme:e.theme,variant:{typo:"h4",txt:"primary"},content:e.title,placeholder:"Title",disabled:e.disabled,onEditEnd:o=>e.onEditEnd({property:"title",value:o})}),e.isDescriptionVisible&&figma.widget.h(v,{theme:e.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:e.description,placeholder:"Add any description...",disabled:e.disabled,onEditEnd:o=>e.onEditEnd({property:"description",value:o})}),figma.widget.h(figma.widget.Fragment,null,e.link&&figma.widget.h(ae,{theme:e.theme,contentTitle:e.link.src,placeholderTitle:"Paste any link...",valid:e.link.valid,disabled:Boolean(e.disabled),onEditEnd:o=>e.onEditEnd({property:"link",value:o})}))),e.suffix&&figma.widget.h(G,{name:"Widget__suffix",verticalAlignItems:"start",direction:"vertical",spacing:8,padding:{top:e.isTitleVisible?4:0},width:"hug-contents"},e.suffix)),figma.widget.h(ne,{theme:e.theme})):figma.widget.h(figma.widget.Fragment,null)}var re=Je;var{widget:qe}=figma,{AutoLayout:se,Text:Qe}=qe;function Xe(e){return figma.widget.h(se,{key:e.key,name:"ItemTableHeader",direction:"horizontal",height:"hug-contents",width:"fill-parent",spacing:16,padding:{vertical:16,horizontal:i.themes.layout.item.horizontal}},e.row.map((o,a)=>figma.widget.h(se,{key:`ItemTableHeader__cell_${a}`,name:"ItemTableHeader__cell",direction:"horizontal",height:i.themes.controls.size[200],verticalAlignItems:"center",spacing:2,width:o.width[e.width]},figma.widget.h(Qe,r(l({},i.themes.typo.p6),{fill:i.themes.txt.secondary.default[e.theme].color,horizontalAlignText:"left"}),o.title))))}var de=Xe;var{widget:et}=figma,{AutoLayout:j,Frame:Bt}=et;function tt(e){return figma.widget.h(j,{key:e.key,name:"ItemTableRow",direction:"horizontal",height:"hug-contents",width:"fill-parent",spacing:16},e.row.map((o,a)=>{var w,u;return figma.widget.h(j,{key:`ItemTableRow__cell_${a}`,name:"ItemTableRow__cell",direction:"horizontal",spacing:8,verticalAlignItems:"start",width:o.width[e.width],tooltip:o.tooltip},o.icon&&figma.widget.h(j,{name:"ItemTableRow__icon",direction:"horizontal",verticalAlignItems:"start",padding:{top:3}},figma.widget.h(I,{glyph:o.icon,color:(w=o==null?void 0:o.style)!=null&&w.fill?o.style.fill:e.disabled?i.themes.txt.minor.default[e.theme].color:i.themes.txt.primary.default[e.theme].color})),figma.widget.h(v,{theme:e.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:(u=o.content)!=null?u:"",placeholder:"...",disabled:o.disabled,style:l({width:"fill-parent",textAlign:"left"},o==null?void 0:o.style),onEditEnd:O=>{var L;return(L=e.onEditEnd)==null?void 0:L.call(e,r(l({},O),{index:a}))}}))}))}var he=tt;var{widget:it}=figma,{AutoLayout:ot,Frame:lt,Text:nt}=it;function at(e){var o,a;return figma.widget.h(ot,{name:"ButtonGhost",direction:"horizontal",height:i.themes.controls.size[(o=e.size)!=null?o:400],width:e.content?"hug-contents":i.themes.controls.size[(a=e.size)!=null?a:400],spacing:4,padding:{left:e.content&&e.glyph?12:e.content?16:0,right:e.content&&e.glyph||e.content?16:0},onClick:e.disabled?()=>{}:e.onClick,cornerRadius:i.themes.controls.radius.cornerRadius,hoverStyle:e.disabled?void 0:i.themes.controls.ghost.hover[e.theme],horizontalAlignItems:"center",verticalAlignItems:"center"},e.glyph&&figma.widget.h(lt,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(I,{glyph:e.glyph,color:e.disabled?i.themes.txt.minor.default[e.theme].color:i.themes.txt[e.variant?e.variant:"primary"].default[e.theme].color})),e.content&&figma.widget.h(nt,r(l({},i.themes.typo.p6),{fill:e.disabled?i.themes.txt.minor.default[e.theme].color:i.themes.txt[e.variant?e.variant:"primary"].default[e.theme].color}),e.content))}var D=at;var{widget:rt}=figma,{AutoLayout:N,Frame:st}=rt;function dt(e){let o=e.positionUp!==void 0||e.positionDown!==void 0||e.more!==void 0;return figma.widget.h(N,{key:e.key,name:"Item",direction:"horizontal",spacing:0,padding:e.padding?e.padding:i.themes.layout.item,width:"fill-parent"},figma.widget.h(N,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},e.children),!e.hideHeightFix&&figma.widget.h(st,{height:32,width:1}),o&&figma.widget.h(N,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},e.positionUp!==void 0&&figma.widget.h(D,{theme:e.theme,glyph:"chevronUp",disabled:!e.positionUp,onClick:()=>{var a;return(a=e.onPositionChange)==null?void 0:a.call(e,{direction:"up"})}}),e.positionDown!==void 0&&figma.widget.h(D,{theme:e.theme,glyph:"chevronDown",disabled:!e.positionDown,onClick:()=>{var a;return(a=e.onPositionChange)==null?void 0:a.call(e,{direction:"down"})}}),e.more!==void 0&&figma.widget.h(D,{theme:e.theme,glyph:"more",disabled:e.more,onClick:()=>{var a;return(a=e.onMore)==null?void 0:a.call(e)}})))}var ce=dt;var ht=e=>/^(ftp|http|https):\/\/[^ "]+$/.test(e),ge=ht;var ct=e=>{let o=a=>(new Date().getMilliseconds()*100*a).toString(16);return o(e?1*e:1)+"-"+o(e?2*e:2)+"-"+o(e?4*e:4)+"-"+o(e?6*e:6)},U=ct;var{widget:me}=figma,{AutoLayout:gt,Frame:mt,Text:Jt,Input:qt,Rectangle:Qt,Image:Xt,SVG:ei,Ellipse:ti,Line:ii,Fragment:oi,useSyncedState:$,useSyncedMap:li,usePropertyMenu:ft,useEffect:yt,useStickable:ni,useStickableHost:ai,useWidgetId:ri,register:si,waitForTask:di}=me;function ut(){let[e,o]=$("data",{colorTheme:"light",preset:Object.keys(c)[0],title:"Entity name",description:"",colorRibbon:i.themes.status.dark.light.fill,isDescriptionVisible:!1,isRibbonVisible:!0,isLinkVisible:!1,link:{src:"",valid:!1},key:Object.keys(h)[0],name:"name",type:"type",mandatory:!1,colorType:i.themes.status.success.light.fill,defaultValue:"",comment:"",width:960}),[a,w]=$("entryType",Object.keys(c)[1]),[u,O]=$("tableConfig",[{title:"Key",disabled:!0,width:{960:60,1200:60,1480:60},style:{fill:i.themes.txt.secondary.default[e.colorTheme].color,textCase:"upper"}},{title:"Name",disabled:!1,width:{960:120,1200:160,1480:200},style:{fontWeight:600,tooltip:"Name"}},{title:"Type",width:{960:120,1200:160,1480:200},disabled:!1,style:{fontSize:i.themes.typo.p5.fontSize-1,fontFamily:"Spline Sans Mono",tooltip:"Type"}},{title:"Mandatory",disabled:!0,tooltip:"Mandatory",width:{960:80,1200:80,1480:80},icon:"asterisk",style:{fill:i.themes.txt.secondary.default[e.colorTheme].color}},{title:"Default value",disabled:!1,width:{960:160,1200:200,1480:260},style:{tooltip:"Default value"}},{title:"Description",width:{960:"fill-parent",1200:"fill-parent",1480:"fill-parent"},disabled:!1,style:{fill:i.themes.txt.secondary.default[e.colorTheme].color,tooltip:"Description"}}]);ft([{itemType:"action",tooltip:"Settings",propertyName:"openSettings",icon:p.settings(i.themes.txt.minor.default.light.color)},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:e.colorTheme==="dark",icon:p.darkmode(e.colorTheme==="dark"?i.themes.txt.primary.inverted.light.color:i.themes.txt.minor.default.light.color)},{itemType:"separator"},...e.preset===Object.keys(c)[0]?[{itemType:"color-selector",propertyName:"colorRibbon",tooltip:"Ribbon color",selectedOption:e.colorRibbon,options:[{option:i.themes.status.error[e.colorTheme].fill,tooltip:"Red"},{option:i.themes.status.warning[e.colorTheme].fill,tooltip:"Orange"},{option:i.themes.status.important[e.colorTheme].fill,tooltip:"Yellow"},{option:i.themes.status.success[e.colorTheme].fill,tooltip:"Green"},{option:i.themes.status.secondary[e.colorTheme].fill,tooltip:"Cyan"},{option:i.themes.status.primary[e.colorTheme].fill,tooltip:"Blue"},{option:i.themes.status.info[e.colorTheme].fill,tooltip:"Purple"},{option:i.themes.status.dark[e.colorTheme].fill,tooltip:"Black"},{option:i.themes.status.disabled[e.colorTheme].fill,tooltip:"Grey"},{option:i.themes.status.white[e.colorTheme].fill,tooltip:"White"}]}]:[],...e.preset===Object.keys(c)[1]?[{itemType:"color-selector",propertyName:"colorType",tooltip:"Type color",selectedOption:e.colorType,options:[{option:i.themes.status.error[e.colorTheme].fill,tooltip:"Red"},{option:i.themes.status.warning[e.colorTheme].fill,tooltip:"Orange"},{option:i.themes.status.important[e.colorTheme].fill,tooltip:"Yellow"},{option:i.themes.status.success[e.colorTheme].fill,tooltip:"Green"},{option:i.themes.status.secondary[e.colorTheme].fill,tooltip:"Cyan"},{option:i.themes.status.primary[e.colorTheme].fill,tooltip:"Blue"},{option:i.themes.status.info[e.colorTheme].fill,tooltip:"Purple"},{option:i.themes.status.dark[e.colorTheme].fill,tooltip:"Black"},{option:i.themes.status.disabled[e.colorTheme].fill,tooltip:"Grey"},{option:i.themes.status.white[e.colorTheme].fill,tooltip:"White"}]}]:[],...e.preset===Object.keys(c)[1]?[{itemType:"dropdown",tooltip:"Key attribute type",propertyName:"key",selectedOption:e.key,options:[{option:Object.keys(h)[0],label:h[Object.keys(h)[0]].label},{option:Object.keys(h)[1],label:h[Object.keys(h)[1]].label},{option:Object.keys(h)[2],label:h[Object.keys(h)[2]].label},{option:Object.keys(h)[3],label:h[Object.keys(h)[3]].label},{option:Object.keys(h)[4],label:h[Object.keys(h)[4]].label},{option:Object.keys(h)[5],label:h[Object.keys(h)[5]].label},{option:Object.keys(h)[6],label:h[Object.keys(h)[6]].label},{option:Object.keys(h)[7],label:h[Object.keys(h)[7]].label}]}]:[],...e.preset===Object.keys(c)[1]?[{itemType:"toggle",tooltip:"Mandatory attribute",propertyName:"mandatory",isToggled:e.mandatory,icon:p.asterisk(e.mandatory?i.themes.txt.primary.inverted.light.color:i.themes.txt.minor.default.light.color)}]:[],{itemType:"separator"},{itemType:"action",tooltip:"Duplicate",propertyName:"duplicate",icon:p.duplicate(i.themes.txt.minor.default.light.color)},{itemType:"separator"},{itemType:"dropdown",tooltip:"Type of new object to be added",propertyName:"entryType",options:Object.keys(c).map(t=>({option:t,label:c[t].label})),selectedOption:a},{itemType:"action",tooltip:"Add",propertyName:"addEntry",icon:p.plus(i.themes.txt.minor.default.light.color)}],({propertyName:t,propertyValue:n})=>{if(t==="openSettings")return new Promise(s=>{H(e.preset===Object.keys(c)[0]?"settings":"settings_entry",{data:e})});t==="key"&&A(n),t==="colorTheme"&&R(),t==="colorRibbon"&&B(n),t==="mandatory"&&ke(),t==="colorType"&&fe(n),t==="duplicate"&&Le(),t==="entryType"&&w(n),t==="addEntry"&&Ce(e,a)}),yt(()=>{figma.clientStorage.getAsync("isUIopen").then(t=>{t===void 0?figma.clientStorage.setAsync("isUIopen",!1):t&&L()}),figma.on("close",()=>{figma.clientStorage.setAsync("isUIopen",!1)}),figma.ui.onmessage=t=>{t.action==="ribbon"&&ye(),t.action==="description"&&ue(),t.action==="link"&&be(),t.action.indexOf("width")>-1&&we(t.action)}});let L=()=>{figma.ui.postMessage({data:e})},H=(t,n)=>{if(t==="settings")return new Promise(s=>{figma.showUI(__uiFiles__.settings,{themeColors:!0,title:"Settings",width:240,height:217}),o(l({},e)),figma.clientStorage.setAsync("isUIopen",!0)});if(t==="settings_entry")return new Promise(s=>{figma.showUI(__uiFiles__.settings_entry,{themeColors:!0,title:"Settings",width:240,height:88}),o(l({},e)),figma.clientStorage.setAsync("isUIopen",!0)})},A=t=>{o(r(l({},e),{key:t}))},R=()=>{o(r(l({},e),{colorTheme:e.colorTheme==="dark"?"light":"dark"}))},B=t=>{t&&o(r(l({},e),{colorRibbon:t}))},fe=t=>{t&&o(r(l({},e),{colorType:t}))},ye=()=>{o(r(l({},e),{isRibbonVisible:!e.isRibbonVisible}))},ue=()=>{o(r(l({},e),{isDescriptionVisible:!e.isDescriptionVisible}))},be=()=>{o(r(l({},e),{isLinkVisible:!e.isLinkVisible}))},ke=()=>{o(r(l({},e),{mandatory:!e.mandatory}))},we=t=>{o(r(l({},e),{width:parseInt(t.split("_")[1])}))},Le=()=>{let t=figma.currentPage.selection[0],n=t.parent,s=t.clone(),g=K(t,s),y=Y(t,s,n,g,8);J(s,y,n,n.children.indexOf(t)+1)},Ce=(t,n)=>{let s=figma.currentPage.selection[0],g=s.parent,y=s.cloneWidget(r(l({},s.widgetSyncedState),{data:r(l({},s.widgetSyncedState.data),{isUIopen:!1,preset:n,title:"Entity name",description:"",colorRibbon:i.themes.status.dark.light.fill,isDescriptionVisible:!1,isRibbonVisible:!0,isLinkVisible:!1,link:{src:"",valid:!1},key:Object.keys(h)[0],name:"name",type:"type",mandatory:!1,colorType:i.themes.status.success.light.fill,defaultValue:"",comment:""}),entryType:Object.keys(c)[1]})),f=K(s,y),E=Y(s,y,g,f,8);J(y,E,g,g.children.indexOf(s)+1)},K=(t,n)=>{let s;if(Boolean(t.getPluginData("position").length)){let g=JSON.parse(t.getPluginData("position"));t.x!==g.x||t.y!==g.y?(s=U(),W(t)):s=t.getPluginData("stackID")}else s=U(),W(t);return t.setPluginData("stackID",s),n.setPluginData("stackID",s),s},Y=(t,n,s,g,y)=>{let f=s.children.filter(m=>m.name==="ERD Modeler"&&m.getPluginData("stackID")===g).sort((m,Ie)=>Ie.y-m.y),E;for(let m=0;m<f.length-1;m++)if(f[m].y-(f[m+1].y+f[m+1].height)-y*2>=n.height){E=f[m+1].y+f[m+1].height+y;break}else E=f[0].y+f[0].height+y;return{x:t.x,y:E}},J=(t,n,s,g)=>{t.x=n.x,t.y=n.y,W(t),s.insertChild(g,t)},W=t=>{t.setPluginData("position",JSON.stringify({x:t.x,y:t.y}))},ve=(t,n)=>{t!=="link"&&o(r(l({},e),{[t]:n})),t==="link"&&o(r(l({},e),{link:{src:n,valid:ge(n)}}))},pe=(t,n)=>{t===1&&o(r(l({},e),{name:n})),t===2&&o(r(l({},e),{type:n})),t===4&&o(r(l({},e),{defaultValue:n})),t===5&&o(r(l({},e),{comment:n}))},xe=(t,n)=>figma.widget.h(figma.widget.Fragment,null,t.isRibbonVisible&&figma.widget.h(mt,{name:"Widget__ribbon",fill:t.colorRibbon,width:"fill-parent",height:8}),figma.widget.h(re,{theme:t.colorTheme,title:t.title,isTitleVisible:!0,isDescriptionVisible:t.isDescriptionVisible,description:t.description,disabled:!1,link:t.isLinkVisible?t.link:void 0,onEditEnd:s=>ve(s.property,s.value.characters)}),figma.widget.h(de,{key:"Widget__tableHeader",theme:t.colorTheme,row:n,width:e.width})),Te=(t,n)=>figma.widget.h(ce,{theme:e.colorTheme,positionUp:void 0,positionDown:void 0,more:void 0,hideHeightFix:!0,padding:{vertical:16,horizontal:i.themes.layout.item.horizontal}},figma.widget.h(he,{theme:t.colorTheme,disabled:!1,width:e.width,row:[r(l({},n[0]),{content:t.key==="none"?"":t.key,style:r(l({},n[0].style),{tooltip:h[t.key].label})}),r(l({},n[1]),{content:t.name,style:l({},n[1].style)}),r(l({},n[2]),{content:t.type,style:r(l({},n[2].style),{fill:t.colorType})}),r(l({},n[3]),{content:"",icon:t.mandatory?n[3].icon:void 0,style:l({},n[3].style)}),r(l({},n[4]),{content:t.defaultValue,style:l({},n[4].style)}),r(l({},n[5]),{content:t.comment,style:l({},n[5].style)})],onEditEnd:s=>pe(s.index,s.characters)}));return figma.widget.h(gt,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:i.themes.radius.container.cornerRadius,fill:i.themes.layer.default[e.colorTheme].fill,width:e.width,effect:i.themes.shadow.container[e.colorTheme],stroke:i.themes.border.container[e.colorTheme].fill,strokeWidth:1},e.preset===Object.keys(c)[0]?xe(e,u):figma.widget.h(figma.widget.Fragment,null),e.preset===Object.keys(c)[1]?Te(e,u):figma.widget.h(figma.widget.Fragment,null))}me.register(ut);})();
