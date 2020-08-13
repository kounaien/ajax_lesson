Ajaxとは
    JavaScriptの非同期通信を使いWebサーバ間とデータのやり取りを行います
    ちなみにAjaxとはAsynchnous JavaScript + XMLの略
    非同期通信ではサーバにリクエスト送った際にサーバからの結果を待たずに反映される

仕組み
    １イベントがクライアント側で発生する
    ２APIを使ってサーバにリクエストを送信する（非同期通信）
    ３リクエストされた情報の処理をサーバ側で行う
    ４処理の結果をJSON 形式でクライアントに送信
    ５レスポンスの結果でページが更新される

    Web API
        API(Application Programming Interface)はサービス提供者がそのサービスを利用するためのインターフェース
        Web APIはWebサーバやWebブラウザ用のAPI
        Web APIではAPI提供者と利用者のやり取りをWeb上で行うプログラミング言語が異なるアプリケーションでも連携可能
        異なる言語間でも連携できることからWebAPI同士を組み合わせて別の価値を生み出すことも可能
        WebAPIでは必要なURLを入力してリクエストを行いそのレスポンスとして結果を受け取っているWEB APIの基本となるのはこのリクエストとレスポンス

        $(function(){
            $('#btn').on('click', function(){
                入力された都市名でWebAPIに天気情報をリクエスト
                API_KEY = "取得したAPIキー";

                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&unites=metric&appid=" + API_KEY;,
                    dataType : 'json',
                }).done(function(data){
                    .done()は通信成功した場合.fail()は失敗した場合に記述するメソッド
                    どちらのメソッドでも(data)を指定しているがその引数内に取得した結果が入るdataの変数名は任意
                }).fail(function(data){

                });
                $.ajax()はAjaxを実装するメソッド
                $('#cityname').val()で#citynameの値を受け取り、URLを結合.val()はHTMLのvalue属性を取得するメソッド
                dataTypeはレスポンスとして受け取りたいデータの型
            });
        });


          //通信成功
          $('#place').text(data.name);
          $('#temp_max').text(data.main.temp_max);
          $('#temp_min').text(data.main.temp_min);
          $('#humidity').text(data.humidity);
          $('#speed').text(data.wind.speed);
          $('#weather').text(data.weather[0].main);
          $('img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

          $('#id名').text(JSONから欲しい値)の形で指定したidのテキストをJSONから受け取った値に変換されます
          例えば最高気温(temp_max)を取得したい場合は、"data.JSONのオブジェクト名.プロパティ名で取得しています

         さらに$('要素名').attr(属性名、値);と指定すると,img要素にsrc属性とalt属性が追加されます
         これにより天気のアイコンを表示

        base: "stations",
main: {
temp: 31.64,
feels_like: 35.75,
temp_min: 30,
temp_max: 33.33,
pressure: 1014,
humidity: 79
},
visibility: 10000,
wind: {
speed: 5.7,
deg: 180
},
clouds: {
all: 20
},