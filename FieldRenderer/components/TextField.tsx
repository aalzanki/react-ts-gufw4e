import React, {useCallback} from 'react'
import FieldHeader from '../FieldHeader'
import {SetTextFieldValue,SetValueInsideOfNestedForm} from '../../redux/actions'
import { useDispatch } from 'react-redux';

type Props = {
  fieldId: string
  fieldName: string
  value: string
  nestedFormId?: string
}

const TextField = (props: Props) => {
  const dispatch = useDispatch()

  const setValue = useCallback((e) => {
    const action: SetTextFieldValue = {
      type: 'SET_TEXT_FIELD_VALUE',
      fieldId: props.fieldId,
      value: e.target.value,
    }
    dispatch(action)
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
      <input style={styles.input} onChange={setValue} value={props.value}/>
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

export default TextField