(function(){
  $.ajax({
    url:"http://127.0.0.1:3000/project",
    type:"get",
    dataType:"json",
  }).then(function(result){
    var p1 = result[12].img;
    var p2 = result[10].img;
    var html = `
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="w-100" src="${p1}" alt=""/>
      </div>
      <div class="carousel-item">
        <img class="w-100" src="${p2}" alt=""/>
      </div>
    </div>
    <a href="#demo" class="carousel-control-prev" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a href="#demo" class="carousel-control-next" data-slide="prev">
      <span class="carousel-control-next-icon"></span>
    </a>
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
    </ul>`;
    document.getElementById("demo").innerHTML = html;

    var p3 = result[7].img;
    var p4 = result[5].img;
    var p5 = result[6].img;
    var html = `
    <div class="col-4 media border-right p-3 bg-white">
      <!-- 图片-->
      <img class="rounded mr-3" src="${p3}" alt=""/>
      <!-- 图片的说明-->
      <div class="media-body">
        <h3><a href="">个人用户</a></h3>
        <p>手机,笔记本和平板等个人及家用产品</p>
      </div>
    </div>
    <div class="col-4 media border-right p-3 bg-white">
      <!-- 图片-->
      <img class="rounded mr-3" src="${p4}" alt=""/>
      <!-- 图片的说明-->
      <div class="media-body">
        <h3><a href="">企业用户</a></h3>
        <p>企业通用产品、解决方案及云服务</p>
      </div>
    </div>
    <div class="col-4 media p-3 bg-white">
      <!-- 图片-->
      <img class="rounded mr-3" src="${p5}" alt=""/>
      <!-- 图片的说明-->
      <div class="media-body">
        <h3><a href="">运营商用户</a></h3>
        <p>运营商网络解决方案、产品及服务</p>
      </div>
    </div>`;
    document.getElementById("k2").innerHTML = html;
    
    var p6 = result[32].img;
    var p7 = result[4].img;
    var p8 = result[31].img;
    var p9 = result[25].img;
    var p10 = result[3].img;
    var html = `
    <div class="col-6 p-0 h-75">
      <div>
        <img src="${p6}" alt=""/>
        <div class="mt-1">
          <a class="text-white" href="#">未来影像</a>
        </div>
        <div class="mt-5">
          <a class="text-white" href="#">了解更多
            <img src="${p7}" alt=""/>
          </a>
        </div>
        <div class="mt-5 mb-5">
          <p class="text-white">*图片仅供参考,请以实物为准</p>
        </div>
      </div>
    </div>
    <div class="col-1 p-0">
      <img class="h-75" src="${p8}" alt=""/>
    </div>
    <div class="col-5 p-0">
      <img class="w-100" src="${p9}" alt=""/>
      <div class="h-50">
        <table></table>
        <p class="mt-5 ml-5">产品</p>
        <h4 class="ml-5">HUAWEI Mate20 系列</h4>
        <p class="ml-5 mt-3">智慧新高度</p>
        <div>
          <a class="ml-5 text-dark" href="#">立即购买
            <img src="${p10}" alt=""/>
          </a>
        </div>
      </div>
    </div>`;
    document.getElementById("k3").innerHTML = html;

    var p11 = result[15].img;
    var p12 = result[16].img;
    var p13 = result[3].img;
    var html = `
    <div>
      <img class="w-100" src="${p11}" alt=""/>
      <div>
      <img src="${p12}" alt=""/>
        <a class="text-dark" href="#">了解更多
          <img src="${p13}" alt=""/>
        </a>
      </div>
    </div>
    `;
    document.getElementById("k4").innerHTML = html;

    var p14 = result[23].img;
    var p15 = result[3].img;
    var p16 = result[28].img;
    var p17 = result[3].img;
    var p18 = result[29].img;
    var p19 = result[3].img;
    var p20 = result[1].img;
    var html = `
    <div class="col-3 p-0">
      <h2>展会活动</h2>
    </div>
    <div class="col-2 p-0 offset-7">
      <a class="text-dark" href="#">查看全部
        <img src="${p14}" alt=""/>
      </a>
    </div>
    <!-- F3轮播图-->
    <div id="demo_2" class="carousel mb-4" data-ride="carousel">
      <!-- 轮播图片-->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-5 p-0 h-100 bg-info mt-5">
              <p class="mt-4 ml-5 m-0">展会活动</p>
              <h3 class="ml-5 mb-3">2019世界移动大会·上海</h3>
              <p class="ml-5">中国 上海|2019年6月26-28日</p>
              <p class="ml-5">
                华为诚邀您出席由GSMA主办的2019年世界移动大会·上海,与全球行业精英、意见领袖、伙伴大咖等一同深入探讨行业趋势和热点话题,共同创见智能未来。
              </p>
              <a class="text-dark ml-5 d-block mb-3" href="#">了解更多
                <img src="${p15}" alt=""/>
              </a>
            </div>
            <div>
              <img class="h-75" src="${p16}"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-5 p-0 h-100 bg-info mt-5">
              <p class="mt-4 ml-5 m-0">展会活动</p>
              <h3 class="ml-5 mb-3">2019 NGON波分论坛 & 华为光网创新大会</h3>
              <p class="ml-5">法国 尼斯|2019年5月20日-23日</p>
              <p class="ml-5">
                520,邀您共赴光网络全球顶级盛会!见证并体验ON2.0 (Optical Networking 2.0) 的最新成果, ...
              </p>
              <a class="text-dark ml-5 d-block mb-3" href="#">了解更多
                <img src="${p17}" alt=""/>
              </a>
            </div>
            <div>
              <img class="h-75" src="${p18}"/>
            </div>
          </div>>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-5 p-0 h-100 bg-info mt-5">
              <p class="mt-4 ml-5 m-0">展会活动</p>
              <h3 class="ml-5 mb-3">2019年全球5G极简站点论坛</h3>
              <p class="ml-5">英国 伦敦|2019年6月11日</p>
              <p class="ml-5">
                本次论坛将围绕如何极简、快四、高效地大规模部署5G展开探讨。在此新愿景之下,来自华为和全球通信行业的高层以及决策者将携手合作,共同克服早期5G商用的挑战。
              </p>
              <a class="text-dark ml-5 d-block" href="#">了解更多
                <img src="${p19}" alt=""/>
              </a>
            </div>
            <div class="col-5 p-0 mt-0">
              <img class="h-75" src="${p20}" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <!-- 左右箭头-->
      <a href="#demo_2" data-slide="prev" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a href="#demo_2" data-slide="next" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
      </a>
      <!-- 轮播指示器-->
      <ul class="carousel-indicators">
      <li data-target="#demo_2" data-slide-to="0" class="active"></li>
      <li data-target="#demo_2" data-slide-to="1"></li>
      <li data-target="#demo_2" data-slide-to="2"></li>
      </ul>
    </div>
    `;
    document.getElementById("k5").innerHTML = html;

    var p21 = result[23].img;
    var p22 = result[41].img;
    var p23 = result[3].img;
    var p24 = result[34].img;
    var p25 = result[3].img;
    var p26 = result[0].img;
    var p27 = result[3].img;
    var html = `
    <div class="col-3 p-0">
      <h2>成功故事</h2>
    </div>
      <div class="col-2 p-0 offset-7">
        <a class="text-dark" href="#">查看全部
          <img src="${p21}" alt=""/>
        </a>
      </div>
      <!-- F4内容-->
      <div class="row m-0 w-100 mt-5">
        <div class="col-2 p-0">
          <img src="${p22}" alt=""/>
        <div>
          <table></table>
          <div class="h-100">
            <p class="m-0 mt-4 ml-5">商业故事</p>
            <h3 class="ml-5">变"听彩铃"为"看彩铃" : 视频彩铃何以成云南最重要名片？</h3>
            <a class="text-dark ml-5 d-block mb-3" href="#">更多
              <img class="ml-2" src="${p23}" alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div class="col-2 p-0 offset-2">
        <img src="${p24}" alt=""/>
        <div>
          <table></table>
          <div class="h-100">
            <p class="m-0 mt-4 ml-5">商业故事</p>
            <h3 class="ml-5">铂金之都南非勒斯滕堡开采智慧城市金矿</h3>
            <a class="text-dark ml-5 d-block mb-3" href="#">更多
              <img class="ml-2" src="${p25}" alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div class="col-2 p-0 offset-2">
        <img src="${p26}" alt=""/>
        <div>
          <table></table>
          <div class="h-100">
            <p class="m-0 mt-4 ml-5">商业故事</p>
            <h3 class="ml-5">Three UK: 5G提升网络容量,创造酷炫应用</h3>
            <a class="text-dark ml-5 d-block mb-3" href="#">更多
              <img class="ml-2" src="${p27}" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
    document.getElementById("k6").innerHTML = html;

    var p28 = result[23].img;
    var p29 = result[2].img;
    var p30 = result[3].img;
    var html = `
    <div class="col-3 p-0">
      <h2>近期新闻</h2>
    </div>
    <div class="col-2 p-0 offset-7">
      <a class="text-dark" href="#">查看全部
        <img src="${p28}" alt=""/>
      </a>
    </div>
    <!-- 内容F5-->
    <div class="row m-0 mt-5">
      <div class="col-5 offset-1 p-0">
        <img src="${p29}" alt=""/>
        <div>
          <table></table>
            <div class="h-100">
              <p class="m-0 mt-4 ml-5">新闻|2019年05月16日</p>
              <h3 class="ml-5 mb-5">华为副董事长胡厚崑：共享创新时代 加速法国成为全球创新中心进程</h3>
              <a class="text-dark ml-5 d-block mb-3" href="#">更多
                <img class="ml-2" src="${p30}" alt=""/>
              </a>
            </div>
          </div>
        </div>
      <div class="col-4 p-0 offset-2">
        <ul class="list-unstyled">
          <li>
            <p class="m-0">新闻 | 2019年05月23日</p>
            <a class="d-block text-dark mb-3" href="#">华为首次提出5G确定性网络，以“差异化+确定性”服务使能千行百业</a>
          </li>
          <li>
            <p class="m-0">新闻 | 2019年05月23日</p>
            <a class="d-block text-dark mb-3" href="#">华为斩获全球光网络最佳全能设备商大奖</a>
          </li>
          <li>
            <p class="m-0">新闻 | 2019年05月20日</p>
            <a class="d-block text-dark mb-3" href="#">广东移动加快推进5G商用，使能千行百业</a>
          </li>
          <li>
            <p class="m-0">新闻 | 2019年05月20日</p>
            <a class="d-block text-dark mb-3" href="#">与全球运营商携手并进，华为ON2.0引领全光网商用进程</a>
          </li>
        </ul>
      </div>
    </div>
    `;
    document.getElementById("k7").innerHTML = html;
  })
})()