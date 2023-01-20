import { AnyAction } from "redux";

export type Action<T> = {
    type: T;
    payload: void
}

export type ActionWithPayload<T,P> = {
    type: T;
    payload: P
}

export type Matcher<AC extends () =>AnyAction > = AC &{
    type: ReturnType<AC>['type'],
    match(action: AnyAction):action is ReturnType<AC> 
}


