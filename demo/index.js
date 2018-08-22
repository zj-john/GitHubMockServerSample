$(document).ready(function(){
  const basicUrl = "https://zj-john.github.io/MyMockData/ForTest/"
  const getSamplePre = $("#getSample pre");
  $.ajax({
    url:basicUrl + "getSample.json",
    type: "GET",
    success: function(res){
      getSamplePre.text(JSON.stringify(res,null,4))
    },
    error:function(jqXHR, textStatus, errorThrown){
      console.log(`Ajax Error!textStatus:${textStatus},errorThrown:${errorThrown}`);
    }
  });
});
