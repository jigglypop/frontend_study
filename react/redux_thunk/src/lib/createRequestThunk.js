import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (disptach) => {
    disptach({ type });
    disptach(startLoading(type));
    try {
      const response = await request(params);
      disptach({
        type: SUCCESS,
        payload: response.data,
      });
      disptach(finishLoading(type));
    } catch (e) {
      disptach({
        type: FAILURE,
        payload: e,
        error: true,
      });
      disptach(startLoading(type));
      throw e;
    }
  };
}
