import * as interpreter from './interpreter';
import * as libparser from './libparser';
import { Result } from './result';
export { Context, FunctionContext } from './interpreter';
/**
 * Given an expression to evaluate in string form, and a context
 * to evaluate the expression against, return the result of
 * this evaluation or throw an error if something goes wrong.
 */
export declare function evaluate(input: string, context: interpreter.Context): Result<any, EvaluationError>;
/**
 * The shape of possible errors that can come from this function.
 * Errors can be matched on by inspecting their `kind`. Errors
 * contain an `input`, which is the remaining string at the time of
 * failure. They may contain more depending on their `kind`.
 */
declare type EvaluationError = libparser.Err | {
    kind: 'NOT_CONSUMED_ALL';
    input: string;
} | {
    kind: 'INTERPRETER';
    input: string;
    error: any;
};
