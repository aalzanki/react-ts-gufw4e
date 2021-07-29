import React, {useCallback} from 'react'
import FieldHeader from '../FieldHeader'
import { SetNumberFieldValue, SetValueInsideOfNestedForm } from '../../redux/actions'
import { useDispatch } from 'react-redux';
import NumericInput from 'react-numeric-input';

type Props = {
  fieldId: string
  fieldName: string
  value: number
  nestedFormId?: string
}

const NumberField = (props: Props) => {
  const dispatch = useDispatch()

  const setValue = useCallback((valueAsNumber) => {
    const action: SetNumberFieldValue = {
      type: 'SET_NUMBER_FIELD_VALUE',
      fieldId: props.fieldId,
      value: valueAsNumber,
    }
    if (props.nestedFormId) {
      const nestedAction: SetValueInsideOfNestedForm = {
        type: 'SET_VALUE_INSIDE_NESTED_FORM',
        nestedFormID: props.nestedFormId,
  action,
      }
      dispatch(action)
    } else {
      dispatch(action)

    }
  }, [])

  return (
    <div style={styles.container}>
      <FieldHeader name={props.fieldName}/>
      <div>
        <NumericInput style={styles.input} value={props.value} onChange={setValue} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex', flexDirection: 'column'
  },
  input: {
    width: '100%' ,
    border: '1px solid lightgray',
    minHeight: 24,
    borderRadius: 4,
    marginRight: 16,
    paddingLeft: 6
  }
}

export default NumberField