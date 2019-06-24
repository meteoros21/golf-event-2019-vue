<template>
    <div style="text-align: left">
        <div class="round-info">
            <div class="round">
                <span>MVP</span>
            </div>
        </div>
        <div style="display: table; width: 100%">
            <div style="display: table-row">
                <div style="display: table-cell; width: 132px;" class="mvp-picture">
                    <img src="images/default-user.png" id="user-photo" style="width: 130px; height: 130px; vertical-align: top">
                </div>
                <div style="display: table-cell; width: 20px"></div>
                <div style="display: table-cell; margin-left: 10px">
                    <table id="table-mvp" class="table-mvp">
                        <thead>
                            <tr>
                                <td style="width: 46%; height: 44px">{{teamName}}</td>
                                <td colspan="2">{{player}}</td>
                            </tr>
                        </thead>
                        <tr>
                            <td>Round 1 - Single stroke play</td>
                            <td style="width: 27%">{{point1}}</td>
                            <td>{{rank1}}</td>
                        </tr>
                        <tr>
                            <td>Round 2 - Match Play</td>
                            <td>{{point2}}</td>
                            <td>{{rank2}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mvp',
    data() { return {
        teamNo: 0,
        teamName: '',
        player: '',
        point1: '-',
        rank1: '',
        point2: '-',
        rank2: '',
        mvpData: {}
    }},
    created () {
        var thisComponent = this;
        this.EventBus.$on('mvp-data', function(data) {
            thisComponent.mvpData = data;
            thisComponent.teamNo = data.teamNo;
            thisComponent.teamName = data.teamName;
            thisComponent.player = data.player;
            thisComponent.point1 = data.records[0].point;
            thisComponent.rank1 = data.records[0].rank;
            thisComponent.point2 = data.records[1].point;
            thisComponent.rank2 = data.records[1].rank;
            thisComponent.changeColors();
        })
    },
    methods: {
        changeColors: function() {
            var table = $('#table-mvp')[0];

            if (this.teamNo == 1) {
                $(table.rows[0].cells[0]).css('background-color', 'blue')
                $(table.rows[0].cells[0]).css('color', 'white')

                $(table.rows[0].cells[1]).css('background-color', 'blue')
                $(table.rows[0].cells[1]).css('color', 'white')
            } else if (this.teamNo == 2) {
                $(table.rows[0].cells[0]).css('background-color', 'red')
                $(table.rows[0].cells[0]).css('color', 'white')

                $(table.rows[0].cells[1]).css('background-color', 'red')
                $(table.rows[0].cells[1]).css('color', 'white')
            }
        }
    },
    mounted() {

    }
};
</script>
