import { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
	className?: string
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	className,
}) => {
	return (
		<button
			className={twMerge(
				"py-2 px-6 rounded-md bg-white text-[#673ab7]",
				className,
			)}
		>
			{children}
		</button>
	)
}

export default Button
