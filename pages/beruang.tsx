import Link from "next/link";
import useStore from "~/components/hewan";

export default function Home() {
	const beruang = useStore((state) => state.beruang);
	const tambahBeruang = useStore((state) => state.tambahBeruang);

	return (
		<div className="flex min-h-screen text-white bg-gray-800">
			<div className="flex flex-col justify-center m-auto space-y-8 text-3xl">
				<div>
					<h1>Ada {beruang} beruang 🐻</h1>
					<button
						onClick={tambahBeruang}
						className="px-2 py-1 mx-auto mt-4 text-base font-semibold text-gray-700 transition-all bg-white rounded-md outline-none"
					>
						Tambah!
					</button>
				</div>
				<div>
					<Link href="/">
						<a className="flex items-center text-base text-blue-400 hover:text-blue-600">
							<BackIcon /> Kembali
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

const BackIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="w-4 h-4"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
