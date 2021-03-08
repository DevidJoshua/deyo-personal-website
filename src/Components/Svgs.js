
export const Chatbox = (props) =>{
    return (
            <svg {...props}>
                <path
                    viewBox="0 0 900 500"
                    d="M173.341 41.732H21.659a26.756 26.756 0 01-4.355-.355C9.583 44.648.7 51 .7 51L.013 27.237l.356.151a14.34 14.34 0 01-.359-3.166v-6.7C.01 7.849 9.701.007 21.656.007h151.685c11.955 0 21.646 7.842 21.646 17.515v6.7c0 9.668-9.687 17.51-21.646 17.51z"
                    width={'100%'}
                    height={'100%'}
                    fill={props.color}
                    viewBox="0 0 30 30"
                    fillRule="evenodd"
                />
            </svg>
        )
}


export const Dots = (props) => {
    return (
        <svg {...props}>
            <path
                data-name="Ellipse 1 copy 4"
                d="M89.8 0a4.16 4.16 0 11-4.2 4.16A4.178 4.178 0 0189.8 0zm0 26.348a4.152 4.152 0 11-4.2 4.152 4.175 4.175 0 014.2-4.152zm0 26.332a4.16 4.16 0 11-4.2 4.16 4.179 4.179 0 014.2-4.16zM61.576 0a4.16 4.16 0 11-4.2 4.16 4.178 4.178 0 014.2-4.16zm0 26.348a4.152 4.152 0 11-4.2 4.152 4.175 4.175 0 014.2-4.152zm0 26.332a4.16 4.16 0 11-4.2 4.16 4.179 4.179 0 014.2-4.16zM32.424 0a4.16 4.16 0 11-4.2 4.16 4.178 4.178 0 014.2-4.16zm0 26.348a4.152 4.152 0 11-4.2 4.152 4.175 4.175 0 014.2-4.152zm0 26.332a4.16 4.16 0 11-4.2 4.16 4.179 4.179 0 014.2-4.16zM4.2 0A4.16 4.16 0 110 4.16 4.178 4.178 0 014.2 0zm0 26.348A4.152 4.152 0 110 30.5a4.175 4.175 0 014.2-4.152zm0 26.332A4.16 4.16 0 110 56.84a4.179 4.179 0 014.2-4.16z"
                fill={props.color}
                fillRule="evenodd"
            />
        </svg>
    )
}