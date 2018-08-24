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
      console.log(`GetSample Ajax Error! textStatus:${textStatus}, errorThrown:${errorThrown}`);
    }
  });

  const postSamplePre = $("#postSample pre");
  const postdata = {
    id:"1",
    name: "z_j"
  };
  $.ajax({
    url:basicUrl + "postSample.json",
    type: "post",
    data: JSON.stringify(postdata),
    contentType: 'application/json; charset=utf-8',
    success: function(res){
      postSamplePre.text(JSON.stringify(res,null,4))
    },
    error:function(jqXHR, textStatus, errorThrown){
      console.log(`PostSample Ajax Error! textStatus:${textStatus}, errorThrown:${errorThrown}`);
    }
  });

  const errorSamplePre = $("#errorSample pre");
  $.ajax({
    url:basicUrl + "errorSample.json",
    type: "GET",
    success: function(res){
      errorSamplePre.text(JSON.stringify(res,null,4))
    },
    error:function(jqXHR, textStatus, errorThrown){
      console.log(`ErrorSample Ajax Error! textStatus:${textStatus}, errorThrown:${errorThrown}`);
    }
  });
});
