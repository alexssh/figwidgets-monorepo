"use strict";(()=>{var Fe=Object.defineProperty,Pe=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var ne=(e,i,d)=>i in e?Fe(e,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[i]=d,n=(e,i)=>{for(var d in i||(i={}))Ze.call(i,d)&&ne(e,d,i[d]);if(oe)for(var d of oe(i))$e.call(i,d)&&ne(e,d,i[d]);return e},s=(e,i)=>Pe(e,ze(i));var u={check:{label:"Task"},title:{label:"Section"}},re={created:{label:"Added"},modified:{label:"Modified"},checked:{label:"Completed"},unchecked:{label:"Unchecked"}};var y="Inter",p="#000",c="#FFF",We="#EBEBEB",G="#DDDDDD",P="#B4B4B4",A="#979797",U="#777";var z="#545454",Y="#424242",N="#252525",se="#29B95F",f="#277DFF",w="#00B6F0",de={r:0,g:.713,b:.9411,a:.12},ae="#7522C5",x="#FAB020",ce={r:.98,g:.704,b:.128,a:.12},he="#FF730E",k="#D20000",ge={r:.823,g:0,b:0,a:.12},Se={themes:{typo:{h4:{fontFamily:y,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:y,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:y,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:y,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:y,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:y,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:y,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{light:{color:p},dark:{color:c}},inverted:{light:{color:c},dark:{color:p}}},secondary:{default:{light:{color:U},dark:{color:A}}},minor:{default:{light:{color:P},dark:{color:z}}},link:{default:{light:{color:f},dark:{color:f}}},error:{default:{light:{color:k},dark:{color:k}}}},border:{divider:{light:{fill:G},dark:{fill:Y}},container:{light:{fill:G},dark:{fill:Y}}},shadow:{container:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},transparent:{light:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0},dark:{type:"drop-shadow",color:{r:0,g:0,b:0,a:0},offset:{x:0,y:0},blur:0}}},status:{success:{light:{fill:se,color:c},dark:{fill:se,color:c}},warning:{light:{fill:he,color:c},dark:{fill:he,color:c}},error:{light:{fill:k,color:c},dark:{fill:k,color:c}},important:{light:{fill:x,color:c},dark:{fill:x,color:c}},secondary:{light:{fill:w,color:c},dark:{fill:w,color:c}},primary:{light:{fill:f,color:c},dark:{fill:f,color:c}},info:{light:{fill:ae,color:c},dark:{fill:ae,color:c}},dark:{light:{fill:p,color:c},dark:{fill:p,color:c}},white:{light:{fill:c,color:c},dark:{fill:c,color:c}},light:{light:{fill:{r:0,g:0,b:0,a:0},color:U,border:{stroke:A,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:{r:0,g:0,b:0,a:0},color:c,border:{stroke:G,strokeWidth:1,strokeAlign:"inside"}}},disabled:{light:{fill:A,color:c},dark:{fill:A,color:c}}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},radius:{cornerRadius:4},ghost:{default:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}},hover:{light:{fill:We},dark:{fill:Y}},disabled:{light:{fill:{r:0,g:0,b:0,a:0}},dark:{fill:{r:0,g:0,b:0,a:0}}}},checkbox:{disabled:{light:{fill:c,border:{stroke:P,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:N,border:{stroke:z,strokeWidth:1,strokeAlign:"inside"}}},disabledActive:{light:{fill:P},dark:{fill:z}},hover:{light:{border:{stroke:f,strokeWidth:2,strokeAlign:"inside"}},dark:{border:{stroke:f,strokeWidth:2,strokeAlign:"inside"}}},empty0:{light:{fill:c,border:{stroke:U,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:N,border:{stroke:A,strokeWidth:1,strokeAlign:"inside"}}},active0:{light:{fill:p},dark:{fill:c}},empty1:{light:{fill:de,border:{stroke:w,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:de,border:{stroke:w,strokeWidth:1,strokeAlign:"inside"}}},active1:{light:{fill:w},dark:{fill:w}},empty2:{light:{fill:ce,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:ce,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}}},active2:{light:{fill:x},dark:{fill:x}},empty3:{light:{fill:ge,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"}},dark:{fill:ge,border:{stroke:k,strokeWidth:1,strokeAlign:"inside"}}},active3:{light:{fill:k},dark:{fill:k}}}},layer:{default:{light:{fill:c},dark:{fill:N}},active:{light:{fill:f},dark:{fill:f}},disabled:{light:{fill:P},dark:{fill:z}}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}},l=Se;var{widget:Ge}=figma,{Input:Ue,Text:Ye,Fragment:Ne}=Ge;function je(e){var i,d,C,r,I,E,M,B,O;return figma.widget.h(Ne,null,!e.disabled&&figma.widget.h(Ue,n(n({name:"InputGhost",inputBehavior:(i=e.type)!=null?i:"wrap",value:e.content,placeholder:e.placeholder,placeholderProps:{fill:l.themes.txt.minor.default[e.theme].color,opacity:1},width:(C=(d=e==null?void 0:e.style)==null?void 0:d.width)!=null?C:"fill-parent",onTextEditEnd:W=>e.onEditEnd(W),fill:l.themes.txt[e.variant.txt].default[e.theme].color,horizontalAlignText:(I=(r=e==null?void 0:e.style)==null?void 0:r.textAlign)!=null?I:"left",hoverStyle:{fill:l.themes.txt.link.default[e.theme].color}},l.themes.typo[e.variant.typo]),e==null?void 0:e.style)),e.disabled&&figma.widget.h(Ye,n(s(n({},l.themes.typo[e.variant.typo]),{fill:l.themes.txt[e.variant.txt].default[e.theme].color,width:(M=(E=e==null?void 0:e.style)==null?void 0:E.width)!=null?M:"fill-parent",horizontalAlignText:(O=(B=e==null?void 0:e.style)==null?void 0:B.textAlign)!=null?O:"left"}),e==null?void 0:e.style),e.content))}var m=je;var{widget:Ke}=figma,{Rectangle:qe}=Ke;function Je(e){return figma.widget.h(qe,{width:"fill-parent",height:1,fill:l.themes.border.divider[e.theme].fill})}var Z=Je;var{widget:Qe}=figma,{SVG:Xe}=Qe,v={plus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${e}"/></svg>`,more:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17V5H3V4ZM3 14H17V15H3V14ZM17 9H3V10H17V9Z" fill="${e}"/></svg>`,chevronUp:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${e}"/></svg>`,chevronDown:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${e}"/></svg>`,check:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${e}"/></svg>`,darkmode:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${e}"/></svg>`,descriptionNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${e}"/></svg>`,editingNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${e}"/></svg>`,checkNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${e}"/></svg>`,visible:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${e}"/></svg>`,hidden:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${e}"/></svg>`,info:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10.5 9V13.5H9.5V9H10.5ZM10.75 7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7Z" fill="${e}"/></svg>`,settings:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H14V5.05001C15.1411 5.28164 16 6.29052 16 7.5C16 8.70948 15.1411 9.71836 14 9.94999V17H13V9.94999C11.8589 9.71836 11 8.70948 11 7.5C11 6.29052 11.8589 5.28164 13 5.05001V3ZM12 7.5C12 6.67157 12.6716 6 13.5 6C14.3284 6 15 6.67157 15 7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5ZM5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5ZM7 14.95C8.14112 14.7184 9 13.7095 9 12.5C9 11.2905 8.14112 10.2816 7 10.05V3H6V10.05C4.85888 10.2816 4 11.2905 4 12.5C4 13.7095 4.85888 14.7184 6 14.95V17H7V14.95Z" fill="${e}"/></svg>`,link:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0251 4.02513C12.392 2.65829 14.608 2.65829 15.9749 4.02513C17.3417 5.39196 17.3417 7.60804 15.9749 8.97487L13.8536 11.0962L13.1464 10.3891L15.2678 8.26777C16.2441 7.29146 16.2441 5.70854 15.2678 4.73223C14.2915 3.75592 12.7085 3.75592 11.7322 4.73223L9.61091 6.85355L8.90381 6.14645L11.0251 4.02513ZM8.97487 15.9749C7.60804 17.3417 5.39196 17.3417 4.02513 15.9749C2.65829 14.608 2.65829 12.392 4.02513 11.0251L6.14645 8.90381L6.85355 9.61092L4.73223 11.7322C3.75592 12.7086 3.75592 14.2915 4.73223 15.2678C5.70854 16.2441 7.29146 16.2441 8.26777 15.2678L10.3891 13.1465L11.0962 13.8536L8.97487 15.9749ZM12.4645 8.20916L11.7574 7.50205L7.4665 11.7929L8.17361 12.5L12.4645 8.20916Z" fill="${e}"/></svg>`,key:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 14.4142L8.45415 9.96006L8.23762 9.36213C8.08414 8.9383 8 8.48008 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C11.5199 12 11.0617 11.9159 10.6379 11.7624L10.0399 11.5458L5.58579 16H4V14.4142ZM3 17H6L10.2974 12.7026C10.8288 12.8951 11.4021 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 8.59785 7.10493 9.1712 7.29737 9.70263L3 14V17ZM13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z" fill="${e}"/></svg>`,duplicate:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4H9C8.44772 4 8 4.44772 8 5V6H7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V11C17 12.1046 16.1046 13 15 13H14V12H15C15.5523 12 16 11.5523 16 11V5C16 4.44772 15.5523 4 15 4ZM4 9C4 8.44772 4.44772 8 5 8H11C11.5523 8 12 8.44772 12 9V15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15V9ZM3 9C3 7.89543 3.89543 7 5 7H11C12.1046 7 13 7.89543 13 9V15C13 16.1046 12.1046 17 11 17H5C3.89543 17 3 16.1046 3 15V9Z" fill="${e}"/></svg>`,asterisk:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4H10.5V9.13401L14.9463 6.56696L15.4463 7.43298L11.0001 9.99999L15.4463 12.567L14.9463 13.433L10.5 10.866V16H9.5V10.8661L5.05396 13.433L4.55396 12.567L9.00007 9.99999L4.55398 7.43304L5.05398 6.56702L9.5 9.13392V4Z" fill="${e}"/></svg>`};function et(e){var i,d;return figma.widget.h(Xe,{name:"Icon",height:(i=e.size)!=null?i:20,width:(d=e.size)!=null?d:20,src:v[e.glyph](e.color)})}var T=et;var{widget:tt}=figma,{AutoLayout:it}=tt;function lt(e){return figma.widget.h(it,{key:e.key,name:"LinkBox",direction:"horizontal",height:"hug-contents",width:"fill-parent",spacing:4},figma.widget.h(T,{glyph:"link",size:16,color:e.contentTitle.length===0?l.themes.txt.minor.default[e.theme].color:e.valid?l.themes.txt.secondary.default[e.theme].color:l.themes.txt.error.default[e.theme].color}),figma.widget.h(m,{theme:e.theme,variant:{typo:"p6",txt:e.contentTitle.length===0?"minor":e.valid?"secondary":"error"},type:"truncate",content:e.contentTitle,placeholder:e.placeholderTitle,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd(i),style:{href:e.valid?e.contentTitle:"",textDecoration:e.valid?"underline":"none"}}))}var V=lt;var{widget:ot}=figma,{AutoLayout:j,Text:Yt,Fragment:nt}=ot;function rt(e){return e.isTitleVisible||e.isDescriptionVisible||e.suffix!==void 0?figma.widget.h(nt,null,figma.widget.h(j,{name:"Header",verticalAlignItems:"start",direction:"horizontal",spacing:24,width:"fill-parent",padding:l.themes.layout.container},figma.widget.h(j,{name:"Widget__row",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",height:e.isTitleVisible||e.isDescriptionVisible?"hug-contents":1},e.isTitleVisible&&figma.widget.h(m,{theme:e.theme,variant:{typo:"h4",txt:"primary"},content:e.title,placeholder:"Title",disabled:e.disabled,onEditEnd:i=>e.onEditEnd({property:"title",value:i})}),e.isDescriptionVisible&&figma.widget.h(m,{theme:e.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:e.description,placeholder:"Add any description...",disabled:e.disabled,onEditEnd:i=>e.onEditEnd({property:"description",value:i})}),figma.widget.h(figma.widget.Fragment,null,e.link&&figma.widget.h(V,{theme:e.theme,contentTitle:e.link.src,placeholderTitle:"Paste any link...",valid:e.link.valid,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"link",value:i})}))),e.suffix&&figma.widget.h(j,{name:"Widget__suffix",verticalAlignItems:"start",direction:"vertical",spacing:8,padding:{top:e.isTitleVisible?4:0},width:"hug-contents"},e.suffix)),figma.widget.h(Z,{theme:e.theme})):figma.widget.h(figma.widget.Fragment,null)}var me=rt;var{widget:st}=figma,{AutoLayout:dt}=st;function at(e){var d,C;let i=e.value?`active${e.priority}`:`empty${e.priority}`;return figma.widget.h(dt,s(n({name:"Checkbox",direction:"horizontal",height:l.themes.controls.size[(d=e.size)!=null?d:200],width:l.themes.controls.size[(C=e.size)!=null?C:200],spacing:0,padding:0,onClick:e.onClick,cornerRadius:l.themes.controls.radius.cornerRadius,horizontalAlignItems:"center",verticalAlignItems:"center",fill:l.themes.controls.checkbox[e.disabled?e.value?"disabledActive":"disabled":i][e.theme].fill},l.themes.controls.checkbox[e.disabled?e.value?"disabledActive":"disabled":i][e.theme].border),{hoverStyle:e.disabled?{}:l.themes.controls.checkbox.hover[e.theme].border}),e.value&&figma.widget.h(T,{glyph:"check",color:l.themes.txt.primary.inverted[e.theme].color}))}var ue=at;var{widget:ct}=figma,{AutoLayout:_,Text:ht}=ct;function gt(e){return figma.widget.h(_,{key:e.key,name:"ItemCheckbox",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:0},figma.widget.h(_,{name:"ItemCheckbox__tag",direction:"horizontal",height:"hug-contents",width:"hug-contents",padding:{right:16}},figma.widget.h(ue,{theme:e.theme,value:e.value,disabled:e.disabledCheckbox,onClick:e.onCheckboxChange,priority:e.priority})),figma.widget.h(_,{name:"ItemCheckbox__content",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:8,padding:{right:16}},figma.widget.h(_,{name:"ItemCheckbox__body",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:5},figma.widget.h(m,{theme:e.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:e.contentTitle,placeholder:e.placeholderTitle,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"title",value:i}),style:e.value&&e.contentTitle.length>0?{textDecoration:"strikethrough",fill:l.themes.txt.secondary.default[e.theme].color}:{}}),figma.widget.h(figma.widget.Fragment,null,e.isDescriptionVisible&&figma.widget.h(m,{theme:e.theme,variant:{typo:"p6",txt:"secondary"},type:"multiline",content:e.contentDescription,placeholder:e.placeholderDescription,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"description",value:i})})),figma.widget.h(figma.widget.Fragment,null,e.link&&figma.widget.h(_,{name:"ItemCheckbox__link",direction:"vertical",height:"hug-contents",width:"fill-parent",padding:{top:1,bottom:4}},figma.widget.h(V,{theme:e.theme,contentTitle:e.link.src,placeholderTitle:"Paste any link...",valid:e.link.valid,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"link",value:i})})))),e.contentMeta&&figma.widget.h(ht,s(n({key:"ItemCheckbox__body"},l.themes.typo.p6),{fill:l.themes.txt.secondary.default[e.theme].color,width:"fill-parent",horizontalAlignText:"left"}),e.contentMeta)))}var fe=gt;var{widget:mt}=figma,{AutoLayout:ke}=mt;function ut(e){return figma.widget.h(ke,{key:e.key,name:"ItemTitle",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:5,padding:{top:0,left:0,bottom:e.isDescriptionVisible?8:0,right:0}},figma.widget.h(m,{theme:e.theme,variant:{typo:"h5",txt:"primary"},type:"multiline",content:e.contentTitle,placeholder:e.placeholderTitle,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"title",value:i})}),figma.widget.h(figma.widget.Fragment,null,e.isDescriptionVisible&&figma.widget.h(m,{theme:e.theme,variant:{typo:"p6",txt:"secondary"},type:"multiline",content:e.contentDescription,placeholder:e.placeholderDescription,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"description",value:i})})),figma.widget.h(figma.widget.Fragment,null,e.link&&figma.widget.h(ke,{name:"ItemTitle__link",direction:"vertical",height:"hug-contents",width:"fill-parent",padding:{top:e.isDescriptionVisible?3:2,bottom:8}},figma.widget.h(V,{theme:e.theme,contentTitle:e.link.src,placeholderTitle:"Paste any link...",valid:e.link.valid,disabled:Boolean(e.disabled),onEditEnd:i=>e.onEditEnd({property:"link",value:i})}))))}var be=ut;var{widget:ft}=figma,{AutoLayout:kt,Frame:bt,Text:Ct}=ft;function yt(e){var i,d;return figma.widget.h(kt,{name:"ButtonGhost",direction:"horizontal",height:l.themes.controls.size[(i=e.size)!=null?i:400],width:e.content?"hug-contents":l.themes.controls.size[(d=e.size)!=null?d:400],spacing:4,padding:{left:e.content&&e.glyph?12:e.content?16:0,right:e.content&&e.glyph||e.content?16:0},onClick:e.disabled?()=>{}:e.onClick,cornerRadius:l.themes.controls.radius.cornerRadius,hoverStyle:e.disabled?void 0:l.themes.controls.ghost.hover[e.theme],horizontalAlignItems:"center",verticalAlignItems:"center"},e.glyph&&figma.widget.h(bt,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(T,{glyph:e.glyph,color:e.disabled?l.themes.txt.minor.default[e.theme].color:l.themes.txt[e.variant?e.variant:"primary"].default[e.theme].color})),e.content&&figma.widget.h(Ct,s(n({},l.themes.typo.p6),{fill:e.disabled?l.themes.txt.minor.default[e.theme].color:l.themes.txt[e.variant?e.variant:"primary"].default[e.theme].color}),e.content))}var L=yt;var{widget:vt}=figma,{AutoLayout:K,Frame:Lt}=vt;function Et(e){let i=e.positionUp!==void 0||e.positionDown!==void 0||e.more!==void 0;return figma.widget.h(K,{key:e.key,name:"Item",direction:"horizontal",spacing:0,padding:e.padding?e.padding:l.themes.layout.item,width:"fill-parent"},figma.widget.h(K,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},e.children),!e.hideHeightFix&&figma.widget.h(Lt,{height:32,width:1}),i&&figma.widget.h(K,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},e.positionUp!==void 0&&figma.widget.h(L,{theme:e.theme,glyph:"chevronUp",disabled:!e.positionUp,onClick:()=>{var d;return(d=e.onPositionChange)==null?void 0:d.call(e,{direction:"up"})}}),e.positionDown!==void 0&&figma.widget.h(L,{theme:e.theme,glyph:"chevronDown",disabled:!e.positionDown,onClick:()=>{var d;return(d=e.onPositionChange)==null?void 0:d.call(e,{direction:"down"})}}),e.more!==void 0&&figma.widget.h(L,{theme:e.theme,glyph:"more",disabled:e.more,onClick:()=>{var d;return(d=e.onMore)==null?void 0:d.call(e)}})))}var q=Et;var{widget:wt}=figma,{AutoLayout:xt,Text:fi}=wt;function Tt(e){return figma.widget.h(xt,{name:"Footer",direction:"horizontal",horizontalAlignItems:"start",width:"fill-parent",spacing:0,padding:{vertical:16,left:l.themes.layout.container.horizontal-16,right:l.themes.layout.container.horizontal-16},verticalAlignItems:"center"},e.children)}var Ce=Tt;var Vt=e=>/^(ftp|http|https):\/\/[^ "]+$/.test(e),ye=Vt;var pt=()=>{let e=String(new Date().toUTCString()).split(",")[1].trim().split(" "),i=e[3].split(":");return{full:`${e[0]} ${e[1]} ${e[2]}, ${i[0]}:${i[0]} ${e[4]}`,date:`${e[0]} ${e[1]} ${e[2]}`,time:`${i[0]}:${i[0]} ${e[4]}`}},b=pt;var At=e=>{let i=d=>(new Date().getMilliseconds()*100*d).toString(16);return i(e?1*e:1)+"-"+i(e?2*e:2)+"-"+i(e?4*e:4)+"-"+i(e?6*e:6)},ve=At;var{widget:Ee}=figma,{AutoLayout:$,Frame:_t,Text:J,Input:Li,Rectangle:Ei,Image:wi,SVG:xi,Ellipse:Ti,Line:Vi,Fragment:Q,useSyncedState:Le,useSyncedMap:It,usePropertyMenu:Mt,useEffect:Bt,useStickable:pi,useStickableHost:Ai,useWidgetId:_i,register:Ii,waitForTask:Mi}=Ee;function Ot(){let[e,i]=Le("data",{selectedEntry:void 0,title:"My checklist",description:"",colorRibbon:l.themes.status.dark.light.fill,colorTheme:"light",completion:"number",width:800,isRibbonVisible:!0,isTitleVisible:!0,isDescriptionVisible:!1,isEditingVisible:!0,isChecksAllowed:!0,isCompletedVisible:!0,isMetadataVisible:!1,isFooterVisible:!0,isBackgroundVisible:!0}),[d,C]=Le("entryType",Object.keys(u)[0]),r=It("entries");Mt([...e.isEditingVisible?[{itemType:"action",tooltip:"Settings",propertyName:"openSettings",icon:v.settings(l.themes.txt.minor.default.light.color)},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:e.colorTheme==="dark",icon:v.darkmode(e.colorTheme==="dark"?l.themes.txt.primary.inverted.light.color:l.themes.txt.minor.default.light.color)}]:[],...e.isEditingVisible&&e.isRibbonVisible?[{itemType:"color-selector",propertyName:"colorRibbon",tooltip:"Ribbon color",selectedOption:e.colorRibbon,options:[{option:l.themes.status.error[e.colorTheme].fill,tooltip:"Red"},{option:l.themes.status.warning[e.colorTheme].fill,tooltip:"Orange"},{option:l.themes.status.important[e.colorTheme].fill,tooltip:"Yellow"},{option:l.themes.status.success[e.colorTheme].fill,tooltip:"Green"},{option:l.themes.status.secondary[e.colorTheme].fill,tooltip:"Cyan"},{option:l.themes.status.primary[e.colorTheme].fill,tooltip:"Blue"},{option:l.themes.status.info[e.colorTheme].fill,tooltip:"Purple"},{option:l.themes.status.dark[e.colorTheme].fill,tooltip:"Black"},{option:l.themes.status.disabled[e.colorTheme].fill,tooltip:"Grey"},{option:l.themes.status.white[e.colorTheme].fill,tooltip:"White"}]}]:[],...e.isEditingVisible?[{itemType:"separator"}]:[],{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!e.isEditingVisible,icon:v.editingNo(e.isEditingVisible?l.themes.txt.minor.default.light.color:l.themes.txt.primary.inverted.light.color)},{itemType:"toggle",tooltip:"Enable/disable checkboxes",propertyName:"isChecksAllowed",isToggled:!e.isChecksAllowed,icon:v.checkNo(e.isChecksAllowed?l.themes.txt.minor.default.light.color:l.themes.txt.primary.inverted.light.color)},...e.isEditingVisible?[{itemType:"separator"},{itemType:"dropdown",tooltip:"New entry type",propertyName:"entryType",options:Object.keys(u).map(t=>({option:t,label:u[t].label})),selectedOption:d},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:v.plus(l.themes.txt.minor.default.light.color)}]:[]],({propertyName:t,propertyValue:o})=>{if(t==="openSettings")return new Promise(a=>{E("settings",{data:e,entry:void 0})});t==="isEditingVisible"&&M(),t==="isChecksAllowed"&&B(),t==="colorTheme"&&O(),t==="colorRibbon"&&W(o),t==="entryType"&&C(o),t==="addEntry"&&H(d)}),Bt(()=>{figma.clientStorage.getAsync("isUIopen").then(t=>{t===void 0?figma.clientStorage.setAsync("isUIopen",!1):t&&I()}),figma.on("close",()=>{figma.clientStorage.setAsync("isUIopen",!1)}),figma.ui.onmessage=t=>{if(t.action==="metadata"&&Ve(),t.action==="completed_tasks"&&X(),t.action==="ribbon"&&we(),t.action==="title"&&xe(),t.action==="description"&&Te(),t.action.indexOf("width")>-1&&_e(t.action),t.action.indexOf("completion")>-1&&Ie(t.action),t.action==="footer"&&pe(),t.action==="background"&&Ae(),t.action==="priority_0"&&(R(r.get(t.uuid),0),figma.closePlugin()),t.action==="priority_1"&&(R(r.get(t.uuid),1),figma.closePlugin()),t.action==="priority_2"&&(R(r.get(t.uuid),2),figma.closePlugin()),t.action==="priority_3"&&(R(r.get(t.uuid),3),figma.closePlugin()),t.action==="move_up"&&D(r.get(t.uuid),"up"),t.action==="move_down"&&D(r.get(t.uuid),"down"),t.action==="show_description"&&(te(r.get(t.uuid)),figma.closePlugin()),t.action==="hide_description"&&(te(r.get(t.uuid)),figma.closePlugin()),t.action==="show_link"&&(ie(r.get(t.uuid)),figma.closePlugin()),t.action==="hide_link"&&(ie(r.get(t.uuid)),figma.closePlugin()),t.action==="duplicate"){let o=r.get(t.uuid);H(o.type,{position:o.position+.5,value:o.value,title:o.title,isDescriptionVisible:o.isDescriptionVisible,description:o.description,priority:o.priority,isLinkVisible:o.isLinkVisible,link:o.link}),figma.closePlugin()}t.action==="delete"&&(Be(r.get(t.uuid)),figma.closePlugin())}});let I=()=>{figma.ui.postMessage({data:e,entries:r.values().filter(t=>e.isCompletedVisible?!0:!t.value)})},E=(t,o)=>{if(t==="settings")return new Promise(a=>{figma.showUI(__uiFiles__.settings,{themeColors:!0,title:"Settings",width:240,height:454}),i(s(n({},e),{selectedEntry:void 0})),figma.clientStorage.setAsync("isUIopen",!0)});if(t==="more-checkbox")return new Promise(a=>{figma.showUI(__uiFiles__.more_checkbox,{themeColors:!0,title:`Task: ${o.entry.title.length?o.entry.title:"..."}`,width:240,height:373}),i(s(n({},e),{selectedEntry:o.entry.uuid})),figma.clientStorage.setAsync("isUIopen",!0)});if(t==="more-title")return new Promise(a=>{figma.showUI(__uiFiles__.more_title,{themeColors:!0,title:`Section: ${o.entry.title.length?o.entry.title:"..."}`,width:240,height:274}),i(s(n({},e),{selectedEntry:o.entry.uuid})),figma.clientStorage.setAsync("isUIopen",!0)})},M=()=>{i(s(n({},e),{isEditingVisible:!e.isEditingVisible}))},B=()=>{i(s(n({},e),{isChecksAllowed:!e.isChecksAllowed}))},O=()=>{i(s(n({},e),{colorTheme:e.colorTheme==="dark"?"light":"dark"}))},W=t=>{t&&i(s(n({},e),{colorRibbon:t}))},X=()=>{i(s(n({},e),{isCompletedVisible:!e.isCompletedVisible}))},we=()=>{i(s(n({},e),{isRibbonVisible:!e.isRibbonVisible}))},xe=()=>{i(s(n({},e),{isTitleVisible:!e.isTitleVisible}))},Te=()=>{i(s(n({},e),{isDescriptionVisible:!e.isDescriptionVisible}))},Ve=()=>{i(s(n({},e),{isMetadataVisible:!e.isMetadataVisible}))},pe=()=>{i(s(n({},e),{isFooterVisible:!e.isFooterVisible}))},Ae=()=>{i(s(n({},e),{isBackgroundVisible:!e.isBackgroundVisible}))},_e=t=>{i(s(n({},e),{width:parseInt(t.split("_")[1])}))},Ie=t=>{i(s(n({},e),{completion:t.split("_")[1]}))},H=(t,o)=>{var g,h;let a=ve();r.get(a)?H(t):(r.set(a,n({uuid:a,value:!1,position:r.values().length===0?0:r.values().length,type:t,title:"",isDescriptionVisible:!1,description:"",priority:0,actor:(h=(g=figma.currentUser)==null?void 0:g.name)!=null?h:"Anonymous",timestamp:b().full,action:"created",isLinkVisible:!1,link:{src:"",valid:!1}},o)),S())},D=(t,o)=>{let a=r.get(t.uuid);r.set(t.uuid,s(n({},t),{position:e.isCompletedVisible?o==="up"?a.position-1.5:a.position+1.5:Me(t.position,r.values().sort((g,h)=>g.position-h.position),o)})),S()},Me=(t,o,a)=>{if(a==="up"){let g=o.slice(0,t),h=g.length-1;for(;h>=0&&(g[h].value&&g[h].type==="check");)h--;return h-.5}else{let g=o.slice(t+1,o.length),h=0;for(;h<g.length;)if(g[h].value&&g[h].type==="check")h++;else{h++;break}return t+h+.5}},S=()=>{r.values().sort((t,o)=>t.position-o.position).forEach((t,o)=>{r.set(t.uuid,s(n({},t),{position:o}))})},Be=t=>{r.delete(t.uuid),S()},ee=(t,o)=>{var a,g,h,le;(o.property==="title"||o.property==="description")&&r.set(t.uuid,s(n({},t),{actor:(g=(a=figma.currentUser)==null?void 0:a.name)!=null?g:"Anonymous",timestamp:b().full,action:"modified",[o.property]:o.value.characters})),o.property==="link"&&r.set(t.uuid,s(n({},t),{actor:(le=(h=figma.currentUser)==null?void 0:h.name)!=null?le:"Anonymous",timestamp:b().full,action:"modified",link:{src:o.value.characters,valid:ye(o.value.characters)}}))},Oe=t=>{var o,a;r.set(t.uuid,s(n({},t),{value:!t.value,actor:(a=(o=figma.currentUser)==null?void 0:o.name)!=null?a:"Anonymous",timestamp:b().full,action:t.value?"unchecked":"checked"}))},R=(t,o)=>{var a,g;r.set(t.uuid,s(n({},t),{priority:o,actor:(g=(a=figma.currentUser)==null?void 0:a.name)!=null?g:"Anonymous",timestamp:b().full,action:"modified"}))},te=t=>{var o,a;r.set(t.uuid,s(n({},t),{isDescriptionVisible:!t.isDescriptionVisible,actor:(a=(o=figma.currentUser)==null?void 0:o.name)!=null?a:"Anonymous",timestamp:b().full,action:"modified"}))},ie=t=>{var o,a;r.set(t.uuid,s(n({},t),{isLinkVisible:!t.isLinkVisible,actor:(a=(o=figma.currentUser)==null?void 0:o.name)!=null?a:"Anonymous",timestamp:b().full,action:"modified"}))},He=(t,o)=>{i(s(n({},e),{[t]:o}))},De=t=>Boolean(t.action)&&Boolean(t.actor)&&Boolean(t.timestamp)?`${re[t.action].label} \xB7 ${t.actor} \xB7 ${t.timestamp}`:"Modify this task to update this meta info",Re=(t,o)=>e.completion==="number"?`Completed ${t} of ${o}`:`Completed ${Math.round(t/o*100)}%`,F=r.values().filter(t=>e.isCompletedVisible?!0:t.type==="check"?!t.value:!0);return figma.widget.h($,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:e.isBackgroundVisible?l.themes.radius.container.cornerRadius:0,fill:e.isBackgroundVisible?l.themes.layer.default[e.colorTheme].fill:{r:0,g:0,b:0,a:0},width:e.width,effect:l.themes.shadow[e.isBackgroundVisible?"container":"transparent"][e.colorTheme],stroke:l.themes.border.container[e.colorTheme].fill,strokeWidth:e.isBackgroundVisible?1:0},e.isRibbonVisible&&figma.widget.h(_t,{name:"Widget__ribbon",fill:e.colorRibbon,width:"fill-parent",height:8}),figma.widget.h(me,{theme:e.colorTheme,title:e.title,isTitleVisible:e.isEditingVisible?e.isTitleVisible:e.isTitleVisible&&Boolean(e.title.length),isDescriptionVisible:e.isEditingVisible?e.isDescriptionVisible:e.isDescriptionVisible&&Boolean(e.description.length),description:e.description,disabled:!e.isEditingVisible,onEditEnd:t=>He(t.property,t.value.characters)}),figma.widget.h($,{name:"Widget__list",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},Boolean(F.length)?F.sort((t,o)=>t.position-o.position).map((t,o)=>{if(t.type===Object.keys(u)[0])return figma.widget.h(q,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?o!==0:void 0,positionDown:e.isEditingVisible?o!==F.length-1:void 0,more:e.isEditingVisible?!e.isEditingVisible:void 0,padding:{vertical:8,horizontal:l.themes.layout.item.horizontal},onPositionChange:a=>D(t,a.direction),onMore:()=>E("more-checkbox",{data:e,entry:t})},figma.widget.h(fe,{key:t.uuid,theme:e.colorTheme,value:Boolean(t.value),contentTitle:t.title,isDescriptionVisible:t.isDescriptionVisible,contentDescription:t.description,contentMeta:e.isMetadataVisible?De(t):void 0,placeholderTitle:"Title...",placeholderDescription:"Description...",disabled:!e.isEditingVisible,disabledCheckbox:!e.isChecksAllowed,priority:t.priority,link:t.isLinkVisible?t.link:void 0,onEditEnd:a=>ee(t,a),onCheckboxChange:()=>e.isChecksAllowed?Oe(t):null}));if(t.type===Object.keys(u)[1])return figma.widget.h(q,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?o!==0:void 0,positionDown:e.isEditingVisible?o!==F.length-1:void 0,more:e.isEditingVisible?!e.isEditingVisible:void 0,padding:{top:o===0?8:24,bottom:8,horizontal:l.themes.layout.item.horizontal},onPositionChange:a=>D(t,a.direction),onMore:()=>E("more-title",{data:e,entry:t})},figma.widget.h(be,{key:t.uuid,theme:e.colorTheme,contentTitle:t.title,placeholderTitle:"Type something...",isDescriptionVisible:t.isDescriptionVisible,contentDescription:t.description,placeholderDescription:"Description...",disabled:!e.isEditingVisible,link:t.isLinkVisible?t.link:void 0,onEditEnd:a=>ee(t,a)}))}):figma.widget.h(Q,null),r.values().filter(t=>e.isCompletedVisible?!0:!t.value).length===0&&r.values().length>0&&figma.widget.h(J,s(n({},l.themes.typo.p5),{fill:l.themes.txt.secondary.default[e.colorTheme].color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"All done. Enjoy your time!"),r.values().length===0&&figma.widget.h(J,s(n({},l.themes.typo.p5),{fill:l.themes.txt.secondary.default[e.colorTheme].color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"What is your next challenge?")),e.isFooterVisible&&figma.widget.h(Q,null,figma.widget.h(Z,{theme:e.colorTheme}),figma.widget.h(Ce,{theme:e.colorTheme},figma.widget.h($,{key:"Footer__left",direction:"horizontal",horizontalAlignItems:"start",width:"fill-parent",verticalAlignItems:"center"},r.values().length===0&&figma.widget.h($,{key:"Footer__empty",padding:{left:16}},figma.widget.h(J,s(n({key:"Footer__content"},l.themes.typo.p6),{fill:l.themes.txt.secondary.default[e.colorTheme].color,width:"fill-parent",horizontalAlignText:"left",height:32,verticalAlignText:"center"}),"No tasks")),r.values().length>0&&figma.widget.h(L,{key:"Footer__action_hideCompleted",theme:e.colorTheme,variant:"secondary",glyph:e.isCompletedVisible?"visible":"hidden",content:Re(r.values().filter(t=>t.type===Object.keys(u)[0]&&t.value).length,r.values().filter(t=>t.type===Object.keys(u)[0]).length),onClick:()=>X()})),e.isEditingVisible&&figma.widget.h(Q,{key:"Footer__actions"},figma.widget.h(L,{key:"Footer__action_addTask",theme:e.colorTheme,variant:"primary",glyph:"plus",content:"Add task",onClick:()=>H("check")})))))}Ee.register(Ot);})();
