function CustomTooltip({ open, setOpen, children }) {
    return (
        <div className={`absolute min-w-[370px] top-[50px] right-0 bg-white p-4 rounded-[22px] duration-300 z-[999] ${open === true ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <p className="underline text-black cursor-pointer flex justify-end pb-3" ><svg width="24" height="24" onClick={e => setOpen(false)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L4 4M20 4L4 20" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
            </svg>
            </p>

            {children}
        </div>
    )
}

export default CustomTooltip
