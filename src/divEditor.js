import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import objectIcon from '@ckeditor/ckeditor5-core/theme/icons/object-full-width.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class DivEditor extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'addDiv', locale => {
            const view = new ButtonView( locale );

            view.set({
                label: 'Insert div',
                icon: objectIcon,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const divClass = prompt('Div Class');
            });

            return view;
        } );
    }
}