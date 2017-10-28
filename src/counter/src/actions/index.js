export const INCREASE = 'increase';
export const DECREASE = 'decrease';
export const ADD = 'add';
export const MINUS = 'minus';

export const increaseAction = () => ({
    type: INCREASE
});
export const decreaseAction = () => ({
    type: DECREASE
});

export const addAction = val => ({
    type: ADD,
    val
});

export const minusAction = val => ({
    type: MINUS,
    val
});
