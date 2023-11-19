'use client'

import { clsx } from 'clsx'

interface TextareaProps {
	label: string
	id: string
	required?: boolean
	disabled?: boolean
	value: string
	placeholder?: string
	className?: string
	setValue?: (value: string) => void
}

export const Textarea: React.FC<TextareaProps> = ({
	label,
	className,
	id,
	required,
	disabled,
	placeholder,
	setValue,
	value,
}) => {
	const handleClick = (abc: any) => {
		if (setValue) return setValue(abc)
	}

	return (
		<div className="w-full p-2">
			<label htmlFor={id} className="text-lg font-semibold leading-6 text-gray-900">
				{label}
			</label>
			<div className="mt-2">
				<textarea
					id={id}
					autoFocus
					required
					autoComplete={id}
					disabled={disabled}
					value={value}
					placeholder={placeholder}
					className={clsx(
						`
                        w-full
                        rounded-md
                        py-1.5
                        px-1.5
                        border-0
                        text-gray-900
                        shadow-sm
                        ring-1
                        min-h-[200px]
                        ring-inset
                        ring-gray-700
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-sky-600
                        placeholder:text-gray-400
                        sm:text-base
                        sm:leading-6
						${className}
                    `,
						disabled && 'cursor-default'
					)}
					onChange={(e) => handleClick(e.target.value)}
				/>
			</div>
		</div>
	)
}
