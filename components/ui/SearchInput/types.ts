import { InputHTMLAttributes, Ref } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Sets the ref html attribute of the input element */
    ref?: Ref<HTMLInputElement>;
}