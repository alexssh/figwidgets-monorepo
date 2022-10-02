(()=>{var ye=Object.defineProperty,Ce=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var X=(e,o,n)=>o in e?ye(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,l=(e,o)=>{for(var n in o||(o={}))ve.call(o,n)&&X(e,n,o[n]);if(J)for(var n of J(o))ke.call(o,n)&&X(e,n,o[n]);return e},r=(e,o)=>Ce(e,be(o));var _={name:"checklist",version:"1.1.0",website:"https://offframes.com/help/figma-widget/checklist"},m={check:{label:"Task"},title:{label:"Section"}},K={created:{label:"Added"},modified:{label:"Modified"},completed:{label:"Completed"}};var h="Inter",w="#000000",d="#FFFFFF",we="#EBEBEB",q="#DDDDDD",L="#B4B4B4",x="#979797",O="#777777";var E="#545454",Q="#424242",H="#252525",p="#29B95F",g="#277DFF",ee="#7522C5",te="#F0783C",R="#F04B6A",Le={themes:{light:{typo:{h4:{fontFamily:h,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:h,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:h,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:h,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:h,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:h,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:h,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:w},inverted:{color:d},except:{color:d}},secondary:{default:{color:O}},minor:{default:{color:L}},link:{default:{color:g}},status:{success:{color:p},error:{color:R}}},border:{divider:{fill:q}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:p,color:d},warning:{fill:te,color:d},error:{fill:R,color:d},primary:{fill:g,color:d},info:{fill:ee,color:d},dark:{fill:w,color:d},light:{fill:{r:0,g:0,b:0,a:0},color:O,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:x,color:d}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:we,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:d,border:{stroke:O,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:g,border:{stroke:g,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:d,border:{stroke:L,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:L,border:{stroke:L,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:w,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:d},active:{fill:g},disabled:{fill:L}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}},dark:{typo:{h4:{fontFamily:h,fontSize:28,lineHeight:34,fontWeight:600},h5:{fontFamily:h,fontSize:20,lineHeight:26,fontWeight:600},h6:{fontFamily:h,fontSize:16,lineHeight:22,fontWeight:600},p4:{fontFamily:h,fontSize:18,lineHeight:26,fontWeight:400},p5:{fontFamily:h,fontSize:16,lineHeight:23,fontWeight:400},p6:{fontFamily:h,fontSize:13,lineHeight:16,fontWeight:400},caption:{fontFamily:h,fontSize:10,lineHeight:16,fontWeight:600,textCase:"upper",letterSpacing:1}},txt:{primary:{default:{color:d},inverted:{color:w},except:{color:d}},secondary:{default:{color:x}},minor:{default:{color:E}},link:{default:{color:g}},status:{success:{color:p},error:{color:R}}},border:{divider:{fill:Q}},shadow:{container:{type:"drop-shadow",color:{r:0,g:0,b:0,a:.12},offset:{x:0,y:2},blur:12}},status:{success:{fill:p,color:d},warning:{fill:te,color:d},error:{fill:R,color:d},primary:{fill:g,color:d},info:{fill:ee,color:d},dark:{fill:w,color:d},light:{fill:{r:0,g:0,b:0,a:0},color:d,border:{stroke:q,strokeWidth:1,strokeAlign:"inside"}},disabled:{fill:x,color:d}},radius:{container:{cornerRadius:8},tag:{cornerRadius:4}},controls:{size:{200:24,400:32,600:40},ghost:{default:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4},hover:{fill:Q,cornerRadius:4},disabled:{fill:{r:0,g:0,b:0,a:0},cornerRadius:4}},checkbox:{default:{fill:H,border:{stroke:x,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},active:{fill:g,border:{stroke:g,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},defaultDisabled:{fill:H,border:{stroke:E,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},activeDisabled:{fill:E,border:{stroke:E,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4},hover:{border:{stroke:d,strokeWidth:1,strokeAlign:"inside"},cornerRadius:4}}},layer:{default:{fill:H},active:{fill:g},disabled:{fill:E}},layout:{container:{vertical:24,horizontal:32},item:{vertical:12,horizontal:32}}}}},i=Le;var{widget:xe}=figma,{Input:Ee,Text:Te,Fragment:Ae}=xe;function Ie(e){var o,n,T,s,y,k,A,I,V;return figma.widget.h(Ae,null,!e.disabled&&figma.widget.h(Ee,l(l({name:"InputGhost",inputBehavior:(o=e.type)!=null?o:"wrap",value:e.content,placeholder:e.placeholder,placeholderProps:{fill:i.themes[e.theme].txt.minor.default.color,opacity:1},width:(T=(n=e==null?void 0:e.style)==null?void 0:n.width)!=null?T:"fill-parent",onTextEditEnd:F=>e.onEditEnd(F),fill:i.themes[e.theme].txt[e.variant.txt].default.color,horizontalAlignText:(y=(s=e==null?void 0:e.style)==null?void 0:s.textAlign)!=null?y:"left",hoverStyle:{fill:i.themes[e.theme].txt.link.default.color}},i.themes[e.theme].typo[e.variant.typo]),e==null?void 0:e.style)),e.disabled&&figma.widget.h(Te,l(r(l({},i.themes[e.theme].typo[e.variant.typo]),{fill:i.themes[e.theme].txt[e.variant.txt].default.color,width:(A=(k=e==null?void 0:e.style)==null?void 0:k.width)!=null?A:"fill-parent",horizontalAlignText:(V=(I=e==null?void 0:e.style)==null?void 0:I.textAlign)!=null?V:"left"}),e==null?void 0:e.style),e.content))}var b=Ie;var{widget:Ve}=figma,{AutoLayout:ie,Text:ht}=Ve;function _e(e){return figma.widget.h(ie,{name:"Header",verticalAlignItems:"center",direction:"vertical",spacing:8,width:"fill-parent",padding:i.themes[e.theme].layout.container},figma.widget.h(ie,{name:"Widget__row",verticalAlignItems:"center",direction:"horizontal",spacing:24,padding:0,width:"fill-parent"},figma.widget.h(b,{theme:e.theme,variant:{typo:"h4",txt:"primary"},content:e.title,placeholder:"Title",disabled:e.disabled,onEditEnd:o=>e.onTitleEditEnd(o)}),e.suffix&&e.suffix),e.isDescriptionVisible&&figma.widget.h(b,{theme:e.theme,variant:{typo:"p5",txt:"secondary"},type:"multiline",content:e.description,placeholder:"Add any description...",disabled:e.disabled,onEditEnd:o=>e.onDescriptionEditEnd(o)}))}var oe=_e;var{widget:pe}=figma,{SVG:Re}=pe,v={plus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 11V16.5H10.5V11H16V10H10.5V4.5H9.5V10H4V11H9.5Z" fill="${e}"/></svg>`,minus:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="12" height="1" fill="${e}"/></svg>`,chevronUp:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.29291L16.3536 12.6465L15.6465 13.3536L10 7.70712L4.35356 13.3536L3.64645 12.6465L10 6.29291Z" fill="${e}"/></svg>`,chevronDown:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.3536L3.64647 7.00002L4.35358 6.29292L10 11.9394L15.6465 6.29292L16.3536 7.00002L10 13.3536Z" fill="${e}"/></svg>`,check:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 6.35353L8.00004 15.7071L2.64648 10.3535L3.35359 9.64642L8.00004 14.2929L16.6465 5.64642L17.3536 6.35353Z" fill="${e}"/></svg>`,darkmode:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 14.0001C14.162 14.0001 14.8042 13.9141 15.416 13.7529C14.2238 15.1294 12.463 16 10.5 16C6.91015 16 4 13.0899 4 9.50002C4 7.53696 4.8706 5.77617 6.2472 4.58399C6.08594 5.19577 6 5.83803 6 6.50005C6 10.6422 9.35786 14.0001 13.5 14.0001ZM13.5 13.0001C14.5207 13.0001 15.4865 12.7648 16.346 12.3455C16.8561 12.0967 17.3287 11.7832 17.7532 11.4155C17.5981 12.0043 17.3732 12.5648 17.088 13.0875C15.8159 15.4186 13.3426 17 10.5 17C6.35786 17 3 13.6422 3 9.50002C3 6.65736 4.58148 4.18408 6.91259 2.91201C7.43535 2.62675 7.9958 2.40189 8.58458 2.24683C8.21694 2.67132 7.90338 3.14393 7.65459 3.65393C7.23529 4.5135 7 5.4793 7 6.50005C7 10.0899 9.91015 13.0001 13.5 13.0001ZM13.0014 4.06836L13.5 3L13.9986 4.06836C14.0161 4.1059 14.0342 4.14312 14.0528 4.18001C14.438 4.94264 15.0574 5.56201 15.82 5.94717C15.8569 5.96579 15.8941 5.98387 15.9316 6.0014L17 6.5L15.9316 6.9986C15.8941 7.01613 15.8569 7.03421 15.82 7.05283C15.0574 7.43799 14.438 8.05736 14.0528 8.81999C14.0342 8.85688 14.0161 8.8941 13.9986 8.93164L13.5 10L13.0014 8.93164C12.9839 8.8941 12.9658 8.85688 12.9472 8.81999C12.562 8.05736 11.9426 7.43799 11.18 7.05283C11.1431 7.03421 11.1059 7.01613 11.0684 6.9986L10 6.5L11.0684 6.0014C11.1059 5.98387 11.1431 5.96579 11.18 5.94717C11.9426 5.56201 12.562 4.94264 12.9472 4.18001C12.9658 4.14312 12.9839 4.1059 13.0014 4.06836ZM12.2049 6.5C12.7126 6.15175 13.1518 5.7126 13.5 5.20489C13.8482 5.71261 14.2874 6.15175 14.7951 6.5C14.2874 6.84825 13.8482 7.2874 13.5 7.79511C13.1518 7.2874 12.7126 6.84825 12.2049 6.5Z" fill="${e}"/></svg>`,descriptionNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM16 16H6.12133L7.12133 15H16V16ZM16 11H11.1213L12.1213 9.99998H16V11ZM11.8787 5.99998L12.8787 4.99998H4.00001V5.99998H11.8787ZM6.87869 11L7.87869 9.99998H4.00001V11H6.87869Z" fill="${e}"/></svg>`,editingNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64645 17.6464L2.35356 18.3535L18.3536 2.35353L17.6465 1.64642ZM13.6066 16.6066L9.56064 12.5607L10.2677 11.8536L12.8995 14.4853L14.3137 13.0711L11.682 10.4393L12.3891 9.73224L16.435 13.7782L16.9297 16.2514L17.1421 17.3137L16.0798 17.1013L13.6066 16.6066ZM7.24265 6.00003L9.56064 8.31802L10.2677 7.61092L6.53554 3.87871L5.82843 3.17161L5.12133 3.87871L3.70711 5.29293L3.00001 6.00003L3.70711 6.70714L7.43932 10.4393L8.14642 9.73224L5.82843 7.41425L7.24265 6.00003ZM6.53554 5.29293L5.82843 4.58582L4.41422 6.00003L5.12133 6.70714L6.53554 5.29293ZM14.0996 15.6854L13.6066 15.1924L15.0208 13.7782L15.5138 14.2712L15.8674 16.039L14.0996 15.6854Z" fill="${e}"/></svg>`,checkNo:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6465 1.64642L1.64648 17.6464L2.35359 18.3535L18.3536 2.35353L17.6465 1.64642ZM6.00004 17C5.7313 17 5.47081 16.9646 5.22297 16.8984L6.12136 16H14C15.1046 16 16 15.1045 16 14V6.1213L16.8984 5.22291C16.9647 5.47075 17 5.73124 17 5.99998V14C17 15.6568 15.6569 17 14 17H6.00004ZM6.00004 3.99998H13.8787L14.7771 3.10159C14.5293 3.03531 14.2688 2.99998 14 2.99998H6.00004C4.34318 2.99998 3.00004 4.34312 3.00004 5.99998V14C3.00004 14.2687 3.03537 14.5292 3.10165 14.777L4.00004 13.8787V5.99998C4.00004 4.89541 4.89547 3.99998 6.00004 3.99998Z" fill="${e}"/></svg>`,visible:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5521 9.15591L15.8463 9.64428C16.165 10.1732 16.165 10.835 15.8463 11.3639L15.5521 11.8523C14.6817 13.297 13.2824 14.3456 11.6513 14.7753C10.5689 15.0605 9.43103 15.0605 8.34858 14.7753C6.71754 14.3456 5.31824 13.297 4.4478 11.8523L4.15356 11.3639C3.83488 10.835 3.83488 10.1732 4.15356 9.64428L4.44779 9.15591C5.31824 7.71118 6.71754 6.66263 8.34858 6.23293C9.43103 5.94775 10.5689 5.94775 11.6513 6.23293C13.2824 6.66263 14.6817 7.71118 15.5521 9.15591ZM3.59125 8.63985C4.59597 6.97223 6.21116 5.76192 8.09382 5.26592C9.34326 4.93675 10.6567 4.93675 11.9061 5.26592C13.7888 5.76192 15.4039 6.97223 16.4087 8.63985L16.7029 9.12822C17.2128 9.97461 17.2128 11.0336 16.7029 11.88L16.4087 12.3684C15.4039 14.036 13.7888 15.2463 11.9061 15.7423C10.6567 16.0715 9.34326 16.0715 8.09382 15.7423C6.21116 15.2463 4.59597 14.036 3.59125 12.3684L3.29701 11.88C2.78706 11.0336 2.78706 9.97461 3.29701 9.12822L3.59125 8.63985ZM9.99997 12.5C11.1045 12.5 12 11.6046 12 10.5C12 9.39543 11.1045 8.5 9.99997 8.5C8.8954 8.5 7.99997 9.39543 7.99997 10.5C7.99997 11.6046 8.8954 12.5 9.99997 12.5Z" fill="${e}"/></svg>`,hidden:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42064 7L4.02338 7.9376C5.1481 9.68717 6.98295 10.8561 9.04393 11.1359C9.67843 11.2221 10.3217 11.2221 10.9562 11.1359C13.0171 10.8561 14.852 9.68717 15.9767 7.9376L16.5795 7L17.4206 7.54076L16.8179 8.47836C16.651 8.73796 16.4704 8.98635 16.2773 9.22276L17.8535 10.5453L17.2107 11.3114L15.5973 9.95756C14.9362 10.5888 14.1735 11.1031 13.3426 11.4793L14.1539 13.7084L13.2143 14.0504L12.4078 11.8347C11.9808 11.9676 11.5405 12.0658 11.0907 12.1269C10.3669 12.2251 9.63316 12.2251 8.90936 12.1269C8.45962 12.0658 8.01931 11.9676 7.59231 11.8347L6.78588 14.0504L5.84618 13.7084L6.65751 11.4793C5.78081 11.0824 4.98004 10.5317 4.29442 9.85216L2.55539 11.3114L1.9126 10.5453L3.62869 9.10537C3.47076 8.9045 3.32169 8.69535 3.1822 8.47836L2.57946 7.54076L3.42064 7Z" fill="${e}"/></svg>`,info:e=>`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10.5 13.5V9H9.5V13.5H10.5ZM10 7.75C10.4142 7.75 10.75 7.41421 10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7C9.25 7.41421 9.58579 7.75 10 7.75Z" fill="${e}"/></svg>`};function ze(e){return figma.widget.h(Re,{name:"Icon",height:20,width:20,src:v[e.glyph](e.color)})}var z=ze;var{widget:De}=figma,{AutoLayout:Fe}=De;function Be(e){var o,n;return figma.widget.h(Fe,r(l({name:"Checkbox",direction:"horizontal",height:i.themes[e.theme].controls.size[(o=e.size)!=null?o:200],width:i.themes[e.theme].controls.size[(n=e.size)!=null?n:200],spacing:0,padding:0,onClick:e.onClick,cornerRadius:i.themes[e.theme].controls.checkbox.default.cornerRadius,horizontalAlignItems:"center",verticalAlignItems:"center",fill:i.themes[e.theme].controls.checkbox[!e.value&&!e.disabled?"default":e.value&&!e.disabled?"active":!e.value&&e.disabled?"defaultDisabled":e.value&&e.disabled?"activeDisabled":"default"].fill},i.themes[e.theme].controls.checkbox[!e.value&&!e.disabled?"default":e.value&&!e.disabled?"active":!e.value&&e.disabled?"defaultDisabled":e.value&&e.disabled?"activeDisabled":"default"].border),{hoverStyle:e.disabled?{}:i.themes[e.theme].controls.checkbox.hover.border}),e.value&&figma.widget.h(z,{glyph:"check",color:i.themes[e.theme].txt.primary.except.color}))}var ne=Be;var{widget:Me}=figma,{AutoLayout:S,Text:Oe}=Me;function He(e){return figma.widget.h(S,{key:e.key,name:"ItemCheckbox",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:0},figma.widget.h(S,{name:"ItemCheckbox__tag",direction:"horizontal",height:"hug-contents",width:"hug-contents",padding:{right:16}},figma.widget.h(ne,{theme:e.theme,value:e.value,disabled:e.disabledCheckbox,onClick:e.onCheckboxChange})),figma.widget.h(S,{name:"ItemCheckbox__content",direction:"vertical",height:"hug-contents",width:"fill-parent",spacing:4,padding:{right:16}},figma.widget.h(b,{theme:e.theme,variant:{typo:"p5",txt:"primary"},type:"multiline",content:e.contentBody,placeholder:e.placeholderBody,disabled:Boolean(e.disabled),onEditEnd:o=>e.onEditEnd(o)}),e.contentMeta&&figma.widget.h(Oe,r(l({key:"Footer__content"},i.themes[e.theme].typo.p6),{fill:i.themes[e.theme].txt.secondary.default.color,width:"fill-parent",horizontalAlignText:"left"}),e.contentMeta)))}var le=He;var{widget:Se}=figma,{AutoLayout:We}=Se;function Ge(e){return figma.widget.h(We,{key:e.key,name:"ItemTitle",direction:"horizontal",height:"hug-contents",width:"fill-parent",padding:0},figma.widget.h(b,{theme:e.theme,variant:{typo:"h5",txt:"primary"},type:"multiline",content:e.contentBody,placeholder:e.placeholderBody,disabled:Boolean(e.disabled),onEditEnd:o=>e.onEditEnd(o)}))}var se=Ge;var{widget:Ze}=figma,{AutoLayout:Pe,Frame:$e,Text:Ue}=Ze;function Ne(e){var o,n;return figma.widget.h(Pe,{name:"ButtonGhost",direction:"horizontal",height:i.themes[e.theme].controls.size[(o=e.size)!=null?o:400],width:e.content?"hug-contents":i.themes[e.theme].controls.size[(n=e.size)!=null?n:400],spacing:4,padding:{left:e.content&&e.glyph?12:e.content?16:0,right:e.content&&e.glyph||e.content?16:0},onClick:e.disabled?()=>{}:e.onClick,cornerRadius:i.themes[e.theme].controls.ghost.default.cornerRadius,hoverStyle:e.disabled?void 0:i.themes[e.theme].controls.ghost.hover,horizontalAlignItems:"center",verticalAlignItems:"center"},e.glyph&&figma.widget.h($e,{name:"ButtonGhost__icon",height:20,width:20},figma.widget.h(z,{glyph:e.glyph,color:e.disabled?i.themes[e.theme].txt.minor.default.color:i.themes[e.theme].txt[e.variant?e.variant:"primary"].default.color})),e.content&&figma.widget.h(Ue,r(l({},i.themes[e.theme].typo.p6),{fill:e.disabled?i.themes[e.theme].txt.minor.default.color:i.themes[e.theme].txt[e.variant?e.variant:"primary"].default.color}),e.content))}var f=Ne;var{widget:Ye}=figma,{AutoLayout:W,Frame:je}=Ye;function Je(e){let o=e.positionUp!==void 0||e.positionDown!==void 0||e.deleting!==void 0;return figma.widget.h(W,{key:e.key,name:"Item",direction:"horizontal",spacing:0,padding:e.padding?e.padding:i.themes[e.theme].layout.item,width:"fill-parent"},figma.widget.h(W,{name:"Item__content",direction:"horizontal",verticalAlignItems:"center",height:"fill-parent",width:"fill-parent"},e.children),figma.widget.h(je,{height:32,width:1}),o&&figma.widget.h(W,{name:"Item__actions",direction:"horizontal",height:"hug-contents",width:"hug-contents",spacing:0,padding:{left:23}},e.positionUp!==void 0&&figma.widget.h(f,{theme:e.theme,glyph:"chevronUp",disabled:!e.positionUp,onClick:()=>{var n;return(n=e.onPositionChange)==null?void 0:n.call(e,{direction:"up"})}}),e.positionDown!==void 0&&figma.widget.h(f,{theme:e.theme,glyph:"chevronDown",disabled:!e.positionDown,onClick:()=>{var n;return(n=e.onPositionChange)==null?void 0:n.call(e,{direction:"down"})}}),e.deleting!==void 0&&figma.widget.h(f,{theme:e.theme,glyph:"minus",disabled:e.deleting,onClick:()=>{var n;return(n=e.onDelete)==null?void 0:n.call(e)}})))}var G=Je;var{widget:Xe}=figma,{Rectangle:Ke}=Xe;function qe(e){return figma.widget.h(Ke,{width:"fill-parent",height:1,fill:i.themes[e.theme].border.divider.fill})}var Z=qe;var{widget:Qe}=figma,{AutoLayout:et,Text:Dt}=Qe;function tt(e){return figma.widget.h(et,{name:"Footer",direction:"horizontal",horizontalAlignItems:"end",width:"fill-parent",spacing:0,padding:{vertical:16,left:i.themes[e.theme].layout.container.horizontal,right:i.themes[e.theme].layout.container.horizontal-16},verticalAlignItems:"center"},e.children)}var re=tt;var it=e=>{let o=n=>(new Date().getMilliseconds()*100*n).toString(16);return o(e?1*e:1)+"-"+o(e?2*e:2)+"-"+o(e?4*e:4)+"-"+o(e?6*e:6)},D=it;var{widget:de}=figma,{AutoLayout:ce,Frame:Ot,Text:P,Input:Ht,Rectangle:St,Image:Wt,SVG:Gt,Ellipse:Zt,Line:Pt,Fragment:ae,useSyncedState:$,useSyncedMap:$t,usePropertyMenu:ot,useEffect:nt,useStickable:Ut,useStickableHost:Nt,useWidgetId:Yt,register:jt,waitForTask:Jt}=de;function lt(){let[e,o]=$("data",{title:"My checklist",description:"",colorTheme:"light",isDescriptionVisible:!0,isEditingVisible:!0,isChecksAllowed:!0,isCompletedVisible:!0,isActorsVisible:!1}),[n,T]=$("entryType",Object.keys(m)[0]),[s,y]=$("entries",new Array({uuid:D(3),position:0,type:Object.keys(m)[1],content:"Today"},{uuid:D(5),position:1,type:Object.keys(m)[0],value:!1,content:"",actor:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:"created"}));nt(()=>{(e.isCompletedVisible===void 0||e.isActorsVisible===void 0)&&o(l(l(l({},e),e.isCompletedVisible===void 0?{isCompletedVisible:!0}:{}),e.isActorsVisible===void 0?{isActorsVisible:!1}:{}))}),ot([{itemType:"link",tooltip:"Help & Documentation",propertyName:"help",href:`${_.website}?utm_superlink=widget_${_.name}_propertyMenu_${_.version}`,icon:v.info(i.themes.light.txt.minor.default.color)},{itemType:"separator"},{itemType:"toggle",tooltip:"Enable/disable editing",propertyName:"isEditingVisible",isToggled:!e.isEditingVisible,icon:v.editingNo(e.isEditingVisible?i.themes.light.txt.minor.default.color:i.themes.light.txt.primary.inverted.color)},{itemType:"toggle",tooltip:"Enable/disable checkboxes",propertyName:"isChecksAllowed",isToggled:!e.isChecksAllowed,icon:v.checkNo(e.isChecksAllowed?i.themes.light.txt.minor.default.color:i.themes.light.txt.primary.inverted.color)},...e.isEditingVisible?[{itemType:"separator"},{itemType:"toggle",tooltip:"Switch color theme",propertyName:"colorTheme",isToggled:e.colorTheme==="dark",icon:v.darkmode(e.colorTheme==="dark"?i.themes.light.txt.primary.inverted.color:i.themes.light.txt.minor.default.color)},{itemType:"separator"},{itemType:"dropdown",tooltip:"New entry type",propertyName:"entryType",options:Object.keys(m).map(t=>({option:t,label:m[t].label})),selectedOption:n},{itemType:"action",tooltip:"Add entry",propertyName:"addEntry",icon:v.plus(i.themes.light.txt.minor.default.color)}]:[]],({propertyName:t,propertyValue:a})=>{t==="isDescriptionVisible"&&k(),t==="isEditingVisible"&&A(),t==="isChecksAllowed"&&I(),t==="colorTheme"&&V(),t==="entryType"&&T(a),t==="addEntry"&&B(n)});let k=()=>{o(r(l({},e),{isDescriptionVisible:!e.isDescriptionVisible}))},A=()=>{o(r(l({},e),{isEditingVisible:!e.isEditingVisible}))},I=()=>{o(r(l({},e),{isChecksAllowed:!e.isChecksAllowed}))},V=()=>{o(r(l({},e),{colorTheme:e.colorTheme==="dark"?"light":"dark"}))},F=()=>{o(r(l({},e),{isCompletedVisible:!e.isCompletedVisible}))},he=()=>{o(r(l({},e),{isActorsVisible:!e.isActorsVisible}))},B=t=>{var c,u;let a=D();s.filter(C=>C.uuid===a).length?B(t):y([...s,{uuid:a,position:s.length===0?0:s[s.length-1].position+1,type:t,content:"",actor:(u=(c=figma.currentUser)==null?void 0:c.name)!=null?u:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:"created"}])},U=(t,a)=>{let c=s.findIndex(M=>M.uuid===t.uuid),u=a==="up"?c-1:c+1,C=[...s],ue=C.splice(c,1)[0];C.splice(u,0,ue),y(C.map((M,fe)=>r(l({},M),{position:fe})))},N=t=>{y([...s.filter(a=>a.uuid!==t.uuid)].map((a,c)=>r(l({},a),{position:c})))},Y=(t,a)=>{var c,u;y([...s.filter(C=>C.uuid!==t.uuid),r(l({},t),{content:a,actor:(u=(c=figma.currentUser)==null?void 0:c.name)!=null?u:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:"modified"})])},me=t=>{var a,c;y([...s.filter(u=>u.uuid!==t.uuid),r(l({},t),{value:!t.value,actor:(c=(a=figma.currentUser)==null?void 0:a.name)!=null?c:"Anonymous",timestamp:new Date().toLocaleString("en-US"),action:t.value?"modified":"completed"})])},j=(t,a)=>{o(r(l({},e),{[t]:a}))},ge=t=>Boolean(t.action)&&Boolean(t.actor)&&Boolean(t.timestamp)?`${K[t.action].label} \xB7 ${t.actor} \xB7 ${t.timestamp}`:"Modify this task to update this meta info";return figma.widget.h(ce,{name:"Widget",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:0,cornerRadius:i.themes[e.colorTheme].radius.container.cornerRadius,fill:i.themes[e.colorTheme].layer.default.fill,width:800,effect:i.themes[e.colorTheme].shadow.container},figma.widget.h(oe,{theme:e.colorTheme,title:e.title,isDescriptionVisible:e.isEditingVisible?e.isDescriptionVisible:e.isDescriptionVisible&&Boolean(e.description.length),description:e.description,disabled:!e.isEditingVisible,onTitleEditEnd:t=>j("title",t.characters),onDescriptionEditEnd:t=>j("description",t.characters)}),figma.widget.h(Z,{theme:e.colorTheme}),figma.widget.h(ce,{name:"Widget__list",verticalAlignItems:"center",direction:"vertical",spacing:0,padding:{left:0,right:0,top:16,bottom:16},width:"fill-parent"},Boolean(s.length)?s.filter(t=>e.isCompletedVisible?!0:!t.value).sort((t,a)=>t.position-a.position).map((t,a)=>{if(t.type===Object.keys(m)[0])return figma.widget.h(G,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?t.position!==0:void 0,positionDown:e.isEditingVisible?t.position!==s.length-1:void 0,deleting:!e.isEditingVisible,padding:{vertical:8,horizontal:i.themes[e.colorTheme].layout.item.horizontal},onPositionChange:c=>U(t,c.direction),onDelete:()=>N(t)},figma.widget.h(le,{key:t.uuid,theme:e.colorTheme,value:Boolean(t.value),contentBody:t.content,contentMeta:e.isActorsVisible?ge(t):void 0,placeholderBody:"Type something...",disabled:!e.isEditingVisible,disabledCheckbox:!e.isChecksAllowed,onEditEnd:c=>Y(t,c.characters),onCheckboxChange:()=>e.isChecksAllowed?me(t):null}));if(t.type===Object.keys(m)[1])return figma.widget.h(G,{key:t.uuid,theme:e.colorTheme,positionUp:e.isEditingVisible?t.position!==0:void 0,positionDown:e.isEditingVisible?t.position!==s.length-1:void 0,deleting:!e.isEditingVisible,padding:{top:a===0?8:24,bottom:8,horizontal:i.themes[e.colorTheme].layout.item.horizontal},onPositionChange:c=>U(t,c.direction),onDelete:()=>N(t)},figma.widget.h(se,{key:t.uuid,theme:e.colorTheme,contentBody:t.content,placeholderBody:"Type something...",disabled:!e.isEditingVisible,onEditEnd:c=>Y(t,c.characters)}))}):figma.widget.h(ae,null),s.filter(t=>e.isCompletedVisible?!0:!t.value).length===0&&s.length>0&&figma.widget.h(P,r(l({},i.themes[e.colorTheme].typo.p5),{fill:i.themes[e.colorTheme].txt.secondary.default.color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"All done. Enjoy your time!"),s.length===0&&figma.widget.h(P,r(l({},i.themes[e.colorTheme].typo.p5),{fill:i.themes[e.colorTheme].txt.secondary.default.color,width:"fill-parent",height:48,horizontalAlignText:"center",verticalAlignText:"center"}),"What is your next challenge?")),figma.widget.h(Z,{theme:e.colorTheme}),figma.widget.h(re,{theme:e.colorTheme},s.length>0&&figma.widget.h(P,r(l({key:"Footer__content"},i.themes[e.colorTheme].typo.p6),{fill:i.themes[e.colorTheme].txt.secondary.default.color,width:"fill-parent",horizontalAlignText:"left",height:32,verticalAlignText:"center"}),"Completed ",s.filter(t=>t.type===Object.keys(m)[0]&&t.value).length," of"," ",s.filter(t=>t.type===Object.keys(m)[0]).length),e.isEditingVisible&&figma.widget.h(ae,{key:"Footer__actions"},figma.widget.h(f,{key:"Footer__action_showDescription",theme:e.colorTheme,variant:"secondary",glyph:e.isDescriptionVisible?"visible":"hidden",content:"Description",onClick:()=>k()}),figma.widget.h(f,{key:"Footer__action_showActors",theme:e.colorTheme,variant:"secondary",glyph:e.isActorsVisible?"visible":"hidden",content:"Actors",onClick:()=>he()}),figma.widget.h(f,{key:"Footer__action_hideCompleted",theme:e.colorTheme,variant:"secondary",glyph:e.isCompletedVisible?"visible":"hidden",content:"Completed tasks",onClick:()=>F()}),figma.widget.h(f,{key:"Footer__action_addTask",theme:e.colorTheme,variant:"primary",glyph:"plus",content:"Add task",onClick:()=>B("check")}))))}de.register(lt);})();
