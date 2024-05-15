export default function Header() {
    return (
        <header className='text-white bg-kappa-green p-[10rem] ps-0 pe-1'>
            <div class="container flex flex-col">
                <nav className="flex w-full">
                    <a>Yo-kard</a>
                    
                    <ul className="flex ml-[auto] gap-10">
                        <li>
                            <a href="text-sm font-thin">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="text-sm font-thin">
                                Kappadex
                            </a>
                        </li>
                        <li>
                            <a href="text-sm font-thin">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>

                <section className="flex flex-col items-center">
                    <h1>Yokard</h1>
                    <picture className="grid w-1/2 bg-white rounded-full">
                        <img
                            src='/kawaii_kappa.png'
                            alt='A kawaii kappa yokai as our mascot'
                            className=""
                        />
                        {/* <img
                            src="/Ellipse.png"
                            alt="A circle"
                            className="z-index-[0] absolute"
                        /> */}
                    </picture>
                    
                    <p>The tabletop game straight from Japan</p>
                </section>
            </div>
    </header>

    )
}