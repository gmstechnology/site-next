export default function Header() {
    return (
        <div className="z-30 h-[20vh] max-w-5xl w-full items-end justify-between font-mono text-sm flex flex-col">
            <div className="fixed left-0 top-0 flex w-full justify-around border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
                <a href="/" className="caret-transparent h-full bottom-0 left-0 flex items-end justify-center static w-auto bg-none">
                    <img
                        className="caret-transparent w-96 h-20 p-2 cursor-pointer"
                        src="/logo_header.png"
                    />
                </a>
            <div />
            <div />
            </div>
        </div>
    )
}