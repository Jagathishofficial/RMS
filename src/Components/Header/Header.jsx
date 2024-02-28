import { IoMdArrowDropdown as DropdownIcon } from "react-icons/io";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { IoIosList as ListIcon } from "react-icons/io";
import { FaRegCreditCard as CardIcon } from "react-icons/fa";

const Header = () => {
    return (
        <div className=" py-[2%]  w-screen flex flex-row items-center justify-around">

            <div className=" flex flex-row items-center gap-10 ">


                <div className=" relative border px-2 p-1 border-gray-400 rounded-[20px] overflow-hidden">
                    <input type='text'
                        placeholder='search'
                        className='outline-none'
                    />
                    <SearchIcon className=" absolute right-[2%] top-[20%] text-black" />
                </div>

                <div className=" flex flex-row gap-3 cursor-pointer items-center">
                    <p>Monday,</p>
                    <p>28th Feb</p>
                    <DropdownIcon />
                </div>

            </div>

            <div className=" flex flex-row items-center gap-4">
                <div className=" flex flex-row items-center cursor-pointer p-1 px-2 gap-2 rounded-[20px] border border-gray-400">
                    <CardIcon/>
                    <p>Cards</p>
                </div>
                <div className=" flex flex-row items-center cursor-pointer p-1 px-2 gap-2 rounded-[20px] border border-gray-400">
                    <ListIcon/>
                    <p>List</p>
                </div>
            </div>

        </div>
    )
}

export default Header;
