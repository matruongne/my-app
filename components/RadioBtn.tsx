import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

interface RadioProps {
	label: string
	value: string
	data: string[]
	SetValue: (value: string) => void
}

const ControlledRadioButtonsGroup: React.FC<RadioProps> = ({ label, data, value, SetValue }) => {
	return (
		<FormControl className="ml-2">
			<FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={value}
				onChange={(e) => SetValue(e.target.value)}
			>
				{data.map((vl, _i) => (
					<FormControlLabel key={_i} value={vl} control={<Radio />} label={vl} />
				))}
			</RadioGroup>
		</FormControl>
	)
}

export default ControlledRadioButtonsGroup
