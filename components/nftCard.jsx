import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';

export const NFTCard = ({ nft, notify }) => {

    function truncateString(string, bp1, bp2) {
        if (bp2 == 0) {
            return string.slice(0, bp1) + "...";    
        }
        return string.slice(0, bp1) + "..." + string.slice(-bp2);
    }

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">ID: {Number(nft.id.tokenId)}</p>
                <div className="flex">
                    <div className="flex-none cursor-pointer" onClick={
                        () => {
                            notify(nft.contract.address);
                            navigator.clipboard.writeText(nft.contract.address);
                        }
                    }>
                        <Image 
                            src="/copy-symbol.png"
                            width="20"
                            height="20"
                        />
                    </div>
                    <div className="flex-auto pl-5">
                        <p className="text-gray-600" >{nft.contract.address}</p>
                    </div>
                </div>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{truncateString(nft.description, 100, 0)}</p>
            </div>
        </div>

    </div>
    )
}