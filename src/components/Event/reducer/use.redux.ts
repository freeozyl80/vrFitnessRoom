import React, { useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { ReducerProps } from "../../../redux";
import { genEvent } from './index'

const useGetReduxData = () => {
  const { eventType } = useSelector(
    (state: ReducerProps) => ({
      eventType: state.event.eventType
    }),
    shallowEqual
  );

  return { eventType};
};


const useDispatchHook = () => {
    const dispatch = useDispatch()

    const getEventData = useCallback(async() => {
        await dispatch(genEvent())
    }, [ ])

    return {  getEventData} 

}

export { useGetReduxData, useDispatchHook };
