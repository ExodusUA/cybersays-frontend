function CustomTooltip({ open, setOpen, children }) {
    return (
        <div className={`absolute min-w-[400px] right-[-250px] bg-white p-4 rounded-lg duration-300 z-[999999999999] ${open === true ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
             <p className="underline text-black cursor-pointer" onClick={e => setOpen(false)}>Close</p>
            {children}
        </div>
    )
}

export default CustomTooltip
