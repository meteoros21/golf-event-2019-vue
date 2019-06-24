<template>
    <div style="text-align: left">
        <div class="round-info">
            <div class="round">
                <span>Final Result</span>
            </div>
        </div>

        <table class="table-result" id="table-final-record">
            <thead>
            <tr>
                <td style="width: 20px">Team</td>
                <td style="width: 30%">Korea Team</td>
                <td class="vs-right" style="padding: 0; text-align: right">V</td>
                <td class="vs-left" style="padding: 0; text-align: left">S</td>
                <td style="width: 30%">China Team</td>
            </tr>
            </thead>
            <tr>
                <td>Round1 - Single Stroke Play</td>
                <td>- Point</td>
                <td class="vs-right" style="padding: 0; text-align: right">V</td>
                <td class="vs-left" style="padding: 0; text-align: left">S</td>
                <td>- Point</td>
            </tr>
            <tr>
                <td>Round2 - Match Play</td>
                <td>- Point</td>
                <td class="vs-right" style="padding: 0; text-align: right">V</td>
                <td class="vs-left" style="padding: 0; text-align: left">S</td>
                <td>- Point</td>
            </tr>
            <tr>
                <td>Total Point</td>
                <td>- Point</td>
                <td class="vs-right" style="padding: 0; text-align: right">V</td>
                <td class="vs-left" style="padding: 0; text-align: left">S</td>
                <td>- Point</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'FinalResult',
    props: ['round'],
    data () {
        return {
            records: []
        }
    },
    methods: {
        showData: function() {
            let table = $('#table-final-record')[0];
            for (var i = 0; i < this.records.length; i++)
            {
                var data = this.records[i];

                table.rows[i+1].cells[1].innerText = data.point1 + ' Point';
                table.rows[i+1].cells[4].innerText = data.point2 + ' Point';

                var point1 = parseInt(data.point1);
                var point2 = parseInt(data.point2);

                $(table.rows[i+1].cells[1]).css('color', 'black');
                $(table.rows[i+1].cells[2]).css('color', 'black');
                $(table.rows[i+1].cells[3]).css('color', 'black');
                $(table.rows[i+1].cells[4]).css('color', 'black');

                $(table.rows[i+1].cells[1]).css('background-color', 'white');
                $(table.rows[i+1].cells[2]).css('background-color', 'white');
                $(table.rows[i+1].cells[3]).css('background-color', 'white');
                $(table.rows[i+1].cells[4]).css('background-color', 'white');

                if (point1 > point2)
                {
                    $(table.rows[i+1].cells[1]).css('color', 'white');
                    $(table.rows[i+1].cells[2]).css('color', 'white');

                    $(table.rows[i+1].cells[1]).css('background-color', 'blue');
                    $(table.rows[i+1].cells[2]).css('background-color', 'blue');
                }
                else if (point1 < point2)
                {
                    $(table.rows[i+1].cells[3]).css('color', 'white');
                    $(table.rows[i+1].cells[4]).css('color', 'white');

                    $(table.rows[i+1].cells[3]).css('background-color', 'red');
                    $(table.rows[i+1].cells[4]).css('background-color', 'red');
                }

                if (i == 2)
                {
                    $(table.rows[0].cells[1]).css('color', 'black');
                    $(table.rows[0].cells[2]).css('color', 'black');
                    $(table.rows[0].cells[3]).css('color', 'black');
                    $(table.rows[0].cells[4]).css('color', 'black');

                    $(table.rows[0].cells[1]).css('background-color', 'white');
                    $(table.rows[0].cells[2]).css('background-color', 'white');
                    $(table.rows[0].cells[3]).css('background-color', 'white');
                    $(table.rows[0].cells[4]).css('background-color', 'white');

                    if (point1 > point2)
                    {
                        $(table.rows[0].cells[1]).css('color', 'white');
                        $(table.rows[0].cells[2]).css('color', 'white');

                        $(table.rows[0].cells[1]).css('background-color', 'blue');
                        $(table.rows[0].cells[2]).css('background-color', 'blue');
                    }
                    else if (point1 < point2)
                    {
                        $(table.rows[0].cells[3]).css('color', 'white');
                        $(table.rows[0].cells[4]).css('color', 'white');

                        $(table.rows[0].cells[3]).css('background-color', 'red');
                        $(table.rows[0].cells[4]).css('background-color', 'red');
                    }
                }
            }
        }
    },
    created () {
        var thisComponent = this;

        this.EventBus.$on('final-result', function(records) {
            thisComponent.records = records
            thisComponent.showData()
        });
    }
}
</script>