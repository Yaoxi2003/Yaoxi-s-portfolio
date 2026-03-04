// ======= Buttons =========

const buttons = {
    bottomLineBtn: `
        border-b-2 border-green500 py-2
        text-white uppercase tracking-[2px]
        hover:text-green500
        cursor-pointer transition-all duration-300
    `,
    linetransitionBtn: {
        btn: `text-white group relative cursor-pointer font-semibold text-[20px] after:content-[''] 
        after:bg-green500 after:absolute after:bottom-[-7px] after:left-0 after:h-[2px] after:w-0 
        after:transition-all after:duration-300 after:ease-out hover:after:w-full`,
        text: `group-hover:text-green500 transition-colors duration-300 uppercase`
    },

}

export default buttons
