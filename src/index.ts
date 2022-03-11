import { test } from './test'
import { __PROD__, __DEV__ } from './env'
/**
 * say hello
 *
 * @author CaoMeiYouRen
 * @date 2020-11-28
 * @export
 */
export function hello() {
    if (__PROD__) {
        console.log('Hello production')
    }
    if (__DEV__) {
        console.log('Hello development')

    }
}
export { test }
