import {defineComponent, h} from "#imports"
import {OutputData} from "@editorjs/editorjs";
import {PropType, VNode} from "@vue/runtime-core";
import {OutputBlockData} from "@editorjs/editorjs/types/data-formats/output-data";
import {BlockToolData} from "@editorjs/editorjs/types/tools";

type Props = {
    raw: OutputData & {}
}
export default defineComponent({
    name: 'EditorRender',
    props: {
        raw: {
            type: Object as PropType<OutputData>,
            required: true
        }
    },
    setup(props) {
        return {
            raw: props.raw
        }
    },
    computed: {
        blocks(): OutputBlockData[] {
            return this.raw.blocks || []
        },
        version() {
            return this.raw.version
        },



        elements() {
            return this.blocks.map(({ type, data, id }) => {
                let el: VNode
                switch (type) {
                    case 'header':
                        el = this.renderHead(data)
                        break
                    case 'paragraph':
                        el = this.renderParagraph(data)
                        break
                    case 'image':
                        el = this.renderImage(data)
                        break
                    case 'list':
                        el = this.renderList(data)
                        break
                    case 'code':
                        el = this.renderCode(data)
                        break
                    case 'quote':
                        el = this.renderQuote(data)
                        break
                    case 'delimiter':
                        el = this.renderDelimiter()
                        break
                    case 'raw':
                        el = this.renderRaw(data)
                        break
                    case 'warning':
                        el = this.renderWarning(data)
                        break
                    case 'checklist':
                        el = this.renderChecklist(data)
                        break
                    default:
                        el = h('p', { innerHTML: data?.text })
                }
                if(id && el.props) {
                    el.props.id = id
                    // add data-block
                    el.props['data-block'] = type
                }
                return el
            })
        },
    },
    methods: {
        renderHead(block: BlockToolData) {
            const { text, level } = block
            return h('h' + level, { innerHTML: text })
        },

        renderParagraph(block: BlockToolData) {
            return h('p', { innerHTML: block.text })
        },

        renderImage(block: BlockToolData) {
            const { file, caption, withBorder, stretched, withBackground } = block

            // class object by condition
            const classes = {
                'image-tool': true,
                'image-tool--with-border': withBorder,
                'image-tool--stretched': stretched,
                'image-tool--with-background': withBackground
            }

            const img = h('img', { src: file.url })
            if(caption) {
                return h('figure', { class: classes }, [
                    img,
                    h('figcaption', { innerHTML: caption })
                ])
            }
            if(img.props) {
                img.props.class = classes
            }
            return img
        },

        // list render
        renderList(block: BlockToolData) {
            const { style, items } = block
            const tag = style === 'ordered' ? 'ol' : 'ul'
            return h(tag, { class: 'list' }, items.map((item: any) => h('li', { innerHTML: item })))
        },

        // code render
        renderCode(block: BlockToolData) {
            const { code } = block
            return h('pre', { class: 'code' }, [
                h('code', {}, code)
            ])
        },

        renderQuote(block: BlockToolData) {
            const { text, caption, alignment } = block
            return h('blockquote', { class: 'quote', 'data-alignment': alignment }, [
                h('p', { innerHTML: text }),
                h('cite', { innerHTML: caption })
            ])
        },

        renderDelimiter() {
            return h('div', { class: 'delimiter' })
        },

        renderTable(block: BlockToolData) {
            const { content } = block
            return h('table', { class: 'table' }, [
                h('tbody', {}, content.map((row: any) => {
                    return h('tr', {}, row.map((cell: any) => {
                        return h('td', { innerHTML: cell })
                    }))
                }))
            ])
        },

        // render raw html from block.text
        renderRaw(block: BlockToolData) {
            return h('div', { innerHTML: block.html })
        },

        renderWarning(block: BlockToolData) {
            const { title, message } = block
            return h('div', { class: 'warning' }, [
                h('div', { class: 'warning__title' }, title),
                h('div', { class: 'warning__message' }, message)
            ])
        },

        renderChecklist(block: BlockToolData) {
            const { items } = block
            return h('div', { class: 'checklist' }, items.map((item: any) => {
                return h('div', { class: 'checklist__item' }, [
                    h('input', { type: 'checkbox', checked: item.checked }),
                    h('span', { innerHTML: item.text })
                ])
            }))
        }
    },
    render() {
        return h('div', { class: 'editor-render', 'data-version': this.version, 'block-counter': this.blocks.length }, this.elements)
    }
})
