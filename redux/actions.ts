export type SetTextFieldValue = {
    type: 'SET_TEXT_FIELD_VALUE';
    fieldId: string
    value: string;
};

export type SetNumberFieldValue = {
    type: 'SET_NUMBER_FIELD_VALUE';
    fieldId: string
    value: number;
};



export type SetValueInsideOfNestedForm = {
    type: 'SET_VALUE_INSIDE_NESTED_FORM';
    nestedFormID: string
    action:SetTextFieldValue | SetNumberFieldValue
};

export type Action =
    | SetTextFieldValue
    | SetNumberFieldValue
    | SetValueInsideOfNestedForm
