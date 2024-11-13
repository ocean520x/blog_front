import {Editor} from '@toast-ui/editor'

export default class {
    editor: any

    constructor(el: string, public height: string, initialValue: string) {
        this.editor = new Editor({
            el: document.querySelector(el)!,
            previewStyle: 'vertical',
            height,
            initialValue,
        })
    }
}
