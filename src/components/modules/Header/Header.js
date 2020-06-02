export default {
    data: function() {
        return {
            isActive: false,
            listItems: [
                {
                    name: 'JBK',
                    scrollTo: '#advantages'
                },
                {
                    name: 'A rendszer előnyei',
                    scrollTo: '#interface'
                },
                {
                    name: 'Modulok',
                    scrollTo: '#system-operation'
                },
                {
                    name: 'Kapcsolat',
                    scrollTo: '#connect'
                }
            ]
        };
    },
    methods: {
        toggleBurgerMenu: function() {
            this.isActive = !this.isActive;
        }
    }
};