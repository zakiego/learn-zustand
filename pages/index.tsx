import Link from "next/link";
import useStore from "~/components/hewan";
import Head from "next/head";

export default function Home() {
	const serigala = useStore((state) => state.serigala);
	const beruang = useStore((state) => state.beruang);

	const totalHewan = useStore((state) => state.totalHewan);

	const kosongkanHewan = useStore((state) => state.kosongkanHewan);

	return (
		<div className="flex flex-col min-h-screen text-white bg-gray-800">
			<div className="flex flex-col justify-center m-auto text-center">
				<div className="px-6 py-6 text-gray-900 bg-gray-200 rounded-2xl">
					<div className="text-3xl ">Selamat datang! 👋</div>
					<div className="mt-3">
						<div>Kebun binatang ini memiliki {totalHewan} hewan</div>
					</div>
					<div className="mt-6">
						<div>Terdiri dari:</div>
						<div>{beruang} beruang 🐻</div>
						<div>{serigala} serigala 🐺</div>
					</div>
					<button
						className="px-2 py-1 mt-2 text-xs text-white bg-gray-500 rounded-md"
						onClick={kosongkanHewan}
					>
						Kosongkan Hewan
					</button>
				</div>

				<div className="mt-6 space-y-3">
					<Link href="/serigala">
						<a className="flex items-center text-blue-400">
							🐺 Pergi Kandang Serigala <GoIcon />
						</a>
					</Link>
					<Link href="/beruang">
						<a className="flex items-center text-blue-400">
							🐻 Pergi Kandang Beruang <GoIcon />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

const GoIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="w-4 h-4"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
