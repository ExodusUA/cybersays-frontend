function CustomTooltip({ open, setOpen, children }) {
    return (
        <div className={`absolute max-w-[370px] md:max-w-[900px] w-full top-[110px] right-0 bg-white p-4 rounded-[22px] duration-300 z-[99999999999] ${open === true ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <svg className=" absolute top-[-35px] right-[155px]" width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L37.3205 36L2.67949 36L20 0Z" fill="#F5F5F5" />
            </svg>
            <p className="underline text-black cursor-pointer flex justify-end " ><svg width="24" height="24" onClick={e => setOpen(false)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L4 4M20 4L4 20" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
            </p>

            {children}
        </div>
    )
}

export default CustomTooltip
