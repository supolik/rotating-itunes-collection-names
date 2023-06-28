import { InputHTMLAttributes, Ref, ReactNode } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Sets the ref html attribute of the input element */
    ref?: Ref<HTMLInputElement>;
    children: ReactNode;
}
