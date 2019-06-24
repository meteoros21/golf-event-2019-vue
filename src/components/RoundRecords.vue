<template>
<div style="text-align: left">
    <div class="round-info">
        <div class="round">
            <span>{{roundName}} - </span>{{roundSubName}}
        </div>
        <div class="round-date">
            <i>{{date}}</i>
        </div>
    </div>

    <table class="table-record" id="table-record">
        <tr>
            <td style="width: 20px">Group</td>
            <td style="width: 30%">Korea Team</td>
            <td style="width: 10%"></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td style="width: 10%"></td>
            <td style="width: 30%">China Team</td>
        </tr>
        <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>6</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>7</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>8</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>9</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>10</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>11</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>12</td>
            <td></td>
            <td></td>
            <td class="vs-right" style="padding: 0; text-align: right">V</td>
            <td class="vs-left" style="padding: 0; text-align: left">S</td>
            <td></td>
            <td></td>
        </tr>
    </table>
</div>
</template>

<script>
var userList = new Array();
userList.push({id: 'kildong@test.com', name:'홍길동'});
userList.push({id: 'manduk@test.com', name:'김만득'});
userList.push({id: 'uchi@test.com', name:'전우치'});
userList.push({id: 'ondal@test.com', name:'온달'});

export default {
  name: "RoundRecords",
  props: ['round'],
  data () {
      return {
          users: userList,
          month: '',
          day: '',
          roundName: '',
          roundSubName: '',
          date: ''
      }
  },
  methods: {
      showData: function(round, dataList) {
          var table = $('.table-record')[round-1];
          console.log('table: ' + table);

          for (var i = 0; i < dataList.length; i++)
          {
              var data = dataList[i];
              table.rows[i+1].cells[1].innerText = data.player1
              table.rows[i+1].cells[2].innerText = data.point1
              table.rows[i+1].cells[6].innerText = data.player2
              table.rows[i+1].cells[5].innerText = data.point2

            var row = table.rows[i+1];
            if (data.status == 0)
            {
                for (var j = 1; j <= 3; j++) {
                    $(row.cells[j]).css('color', 'black');
                    $(row.cells[j]).css('background-color', '#9fc6e7');
                }

                for (var j = 4; j <= 6; j++) {
                    $(row.cells[j]).css('color', 'black');
                    $(row.cells[j]).css('background-color', '#e9999a');
                }

                var t = data.time.split(':');

                row.cells[3].innerHTML = this.month + '.<br/>' + (typeof t[0] == 'undefined' ? '&nbsp;' : t[0]) + ':';
                row.cells[4].innerHTML = this.day + '<br/>' + (typeof t[1] == 'undefined' ? '&nbsp' : t[1]);

            }
            else if (data.status == 1)
            {
                for (var j = 1; j <= 3; j++) {
                    $(row.cells[j]).css('color', 'white');
                    $(row.cells[j]).css('background-color', 'blue');
                    $(row.cells[j]).css('font-weight', 'bold');
                }

                for (var j = 4; j <= 6; j++) {
                    $(row.cells[j]).css('color', 'white');
                    $(row.cells[j]).css('background-color', 'red');
                    $(row.cells[j]).css('font-weight', 'bold');
                }

                row.cells[3].innerText = 'V';
                row.cells[4].innerText = 'S';
            }
            else
            {
                var p1 = parseInt(data.point1);
                var p2 = parseInt(data.point2);

                if (p1 > p2)
                {
                    for (var j = 1; j <= 3; j++) {
                        $(row.cells[j]).css('color', 'white');
                        $(row.cells[j]).css('background-color', 'blue');
                        $(row.cells[j]).css('font-weight', 'bold');
                    }

                    for (var j = 4; j <= 6; j++) {
                        $(row.cells[j]).css('color', 'black');
                        $(row.cells[j]).css('background-color', 'white');
                    }
                }
                else if (p1 < p2)
                {
                    for (var j = 1; j <= 3; j++) {
                        $(row.cells[j]).css('color', 'black');
                        $(row.cells[j]).css('background-color', 'white');
                    }

                    for (var j = 4; j <= 6; j++) {
                        $(row.cells[j]).css('color', 'white');
                        $(row.cells[j]).css('background-color', 'red');
                        $(row.cells[j]).css('font-weight', 'bold');
                    }
                }
                else
                {
                    for (var j = 1; j <= 3; j++) {
                        $(row.cells[j]).css('color', 'black');
                        $(row.cells[j]).css('background-color', 'white');
                    }
                    for (var j = 4; j <= 6; j++) {
                        $(row.cells[j]).css('color', 'black');
                        $(row.cells[j]).css('background-color', 'white');
                    }
                }

                row.cells[3].innerText = 'V';
                row.cells[4].innerText = 'S';
            }
          }
      }
  },
  created () {
      let thisComponent = this

      if (this.round == '1')
      {
          this.month = '06'
          this.day = '27'
          this.roundName = 'Round 1'
          this.roundSubName = 'Single Stroke Play'
          this.date = '2019.06.27.WED'
      }
      else
      {
          this.month = '06'
          this.day = '28'
          this.roundName = 'Round 2'
          this.roundSubName = 'Match Play'
          this.date = '2019.06.28.THU'
      }
      this.EventBus.$on('round-record', function(d) {
          var round = d.round;
          var dataList = d.dataList;
          console.log('round: ' + round + ': ' + thisComponent.round);
          if (round == parseInt(thisComponent.round))
            thisComponent.showData(round, dataList)
      })
  }
};
</script>