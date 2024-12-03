quanTriCaNhan = new (function () {
  this.cấuHình = function (K, W, T, I) {
    // Phần mềm quay màn hình
    // Faststone capture

    // bài viết tham khảo kiến thức
    // https://tailieu.ine.vn/a/68513/fnso
    // https://tailieu.ine.vn/a/68516/fnchonNgay
    // https://tailieu.ine.vn/a/68468/fniVal
    // https://tailieu.ine.vn/a/58471/Huong-dan-Su-dung-fntoParam-de-lay-gia-tri-cua-tat-ca-cac-the-co-id-nam-trong-the-duoc-goi
    // call → this
    // var Tbl = $(this).hide();
    // cl("LOG", T, I, W);
    // $.fn.bảng → $().bảng
    // Hiển thị bảng vào trong 1 thẻ được chỉ định
    // I → ID bảng
    // ả dòng hiển thị sẵn. Nếu k muốn hiển thị sẵn thì bỏ qua tham số này
    // Tbl.hide(); // Ẩn đi bảng gốc
    var H;
    // I = "bàiViết";
    // ID bảng bài viết → bàiViết
    // ID bảng tài khoản → tàiKhoản
    // ID bảng chuyên mục → chuyênMục
    // config(I+"."+i);
    // Trong đó:
    // I là ID bảng đối tượng
    // i là id đối tượng cần lấy dữ liệu
    W.find("#chứaBảng").append((H = $("<div>", { class: "hiểnThị" })));
    W.find("#thanhCuộn").sửaLớp("dn -dnp");
    W.find("#chứaBảng .chứa").first().sửaLớp("dn");
    // Function xem bài viết
    // khôngGian.bàiViết.xem(i); // Xem qua function
    // vàoURL(dữLiệu.url(i, "ế")); // Vào xem bài viết qua url

    // Xóa đối tượng
    // I là id bảng
    // i là 1 hoặc nhiều id đối tượng. i có thể là 1234, i → [1234,2346,3567]
    // xửLý("đốiTượng.xóa."+I, {d:i}, function(s){
    //     if(s>0){
    //         // Thành công
    //     } else {
    //         // Lỗi
    //     }
    // })

    // Cấu hình cột thuộc tính
    var ộ = {
      ọ: {
        ê: function () {
          $(this)
            .empty()
            .append(
              $("<input>", { class: "", checked: false }).iCheck({
                nhãn: "", // Tiêu đề. Chỉ muốn hiển thị icon thì để giá trị này empty string
                bo: "mtb2 mlr5 ptb5 plr10 bgcd bra15 c9", // Class bo
                boChọn: "bg1g1,cf", // Sửa lớp sau khi chọn
                icon: ["radio_button_unchecked", "task_alt"],
                ngay: true,
                đổi: function (v) {
                  cl(111, v);
                },
              })
            );
        },
        ã: function () {
          $(this)
            .empty()
            .append(
              $("<input>", { class: "", checked: false }).iCheck({
                nhãn: "", // Tiêu đề. Chỉ muốn hiển thị icon thì để giá trị này empty string
                bo: "mtb2 mlr5 ptb5 plr10 bgcd bra15 c9", // Class bo
                boChọn: "bg1g1,cf", // Sửa lớp sau khi chọn
                icon: ["radio_button_unchecked", "task_alt"],
                ngay: true,
                đổi: function (v) {},
              })
            );
        },
        // ạ: "select",
      },
      i: {
        ê: "Id bài viết",
        sửaĐc: false,
        ă: "c",
        ã: function (i) {
          $(this)
            .empty()
            .append($("<div>", { class: "", text: i }));
        },
      },
      chứcNăng: {
        ê: "Chức năng",
        sửaĐc: false,
        ă: "c",
        ã: function () {
          $(this)
            .empty()
            .append(
              $.icon("menu::vam,fs14,cgd,bấmĐc").on("click", function () {
                $(this).chọn(
                  [
                    {
                      ê: "Làm mới",
                      i: "cached::vam,cod",
                      f: function () {
                        r.trigger("đổi"); // Hiển thị lại dòng
                        r.trigger("mới"); // Tải và hiển thị lại dòng
                      },
                    },
                  ],
                  {
                    position: {
                      // Vị trí hiển thị của Msg
                      at: "left center",
                      my: "right center",
                    },
                  }
                );
              })
            );
        },
      },
      ê: {
        ê: "Tiêu đề",
        // koChờ:true,
        ã: function (i) {
          var T = $(this);
          chờ(function () {
            CẦN.db("bàiViết." + i);
            T.empty().append(
              $("<div>", { class: "", text: dữLiệu.tên(i, "ế") })
            );
          }, 1000);

          // cl(111, i, dữLiệu.tên(i, "ế"));

          // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
          // $(this).sửaLớp("fwb,cl1");
          // $(this).text("Training")
        },
        // ã: function (v) {
        //   // cl(111, v);
        //   // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
        //   $(this).sửaLớp("fwb,cl1,wmn2,wmx2");
        //   // $(this).text("Training")
        // },
        // bắtBuộc: false,
        // chúThích: "<br>",
        // chỉHiệnVớiAdmin: false,
        // gõ: false,
        // koChờ: false,
        // koSẵn: false,
        // kếThừa: false,
        sửaĐc: false,
        // trống: false,
        // á: {_fe0EX: {…}, _Cce6q: {…}},
        // ò: false,
        // ạ: "select",
        // ẩ: false,
        // ắ: true
      },
      ô: {
        ê: "Mô tả",
        koChờ: true,
        sửaĐc: false,
        ã: function (i) {
          var T = $(this);
          chờ(function () {
            CẦN.db("bàiViết." + i);
            T.empty().append(
              $("<div>", { class: "", text: dữLiệu.môTả(i, "ế", 100) })
            );
          }, 1000);

          // cl(111, i, dữLiệu.tên(i, "ế"));

          // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
          // $(this).sửaLớp("fwb,cl1");
          // $(this).text("Training")
        },
      },
      ộ: {
        ê: "Nội dung",
        sửaĐc: false,

        ã: function () {
          // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
          $(this).sửaLớp("wmn2,wmx2");
          // $(this).text("Training")
        },
        // koChờ:true,
        // ã:function(){
        //     // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
        //     $(this).sửaLớp("fwb,cl1");
        //     // $(this).text("Training")
        // },
      },
      ừ: {
        ê: "Người đăng",
        sửaĐc: false,
      },
      a: {
        ê: "Thời gian đăng",
        sửaĐc: false,
      },
    };
    H.bảng(
      I,
      {
        // Cấu hình chung
        tiêuĐề: "Quản lý bài viết - Hoang The Nhan - TT07", // Tiêu đề bảng
        cỡChữ: 12, // Cỡ chữ hiển thị trên toàn khung
        mới: true, // Bảng kiểu mới
        chân: false, // Chân bảng
        khung: false, // Hiển thị khung → Nếu false → chỉ lần phần chứa giao diện khung bảng trở vào
        href: false, // Không hiển thị URL
        cộtGộp: ộ, // Tạo cấu hình cột (thuộc tính)
        cộts: $.gộp(["stt"], Object.keys(ộ)), // Danh sách ID cột (thuộc tính) cần hiển thị
        // nútBỏ:[], // Danh sách nút mặc định trên bảng cần loại bỏ
        // ẩnCột:true,
        bảng: {
          // Cấu hình bảng
          mãNguồn: 1,
          // { // Viết lại mã nguồn. hoặc xác định sử dụng mã nguồn
          //     1:function(){
          //         // Mã nguồn khởi tạo
          //     },
          //     // 2:function(){
          //     //     // Mã nguồn thực thi
          //     // },
          // }
          // sửaĐc:true, // Cho phép sửa trực tiếp trên dòng (sửa giá trị td)
          phânTrang: true, // Hiển thị phân trang
          nútBỏ: ["thêmDòng", "thêmCột"],
          tảiDần: true, // Hiển thị tải dần
          trống: true,
          sửaLớp: {
            // Sửa lớp các thẻ có class tương ứng
            h400e: "lh13,-lh12",
            nútTrái2: "lh13",
          },
          ẩnCột: true,
        },
      },
      function () {
        var T = $(this);
        cl("LOG", "Cấu hình xong bảng", $(this));
        // this → Thẻ table;
        // Sự kiện thêm dòng vào bảng → Sự kiện được trigger vào thẻ table
        // Thêm 1 dòng → .trigger("thêmDòng", i)
        // Thêm dòng dạng phân trang → .trigger("thêmDòngs", [ids]); // ids → mảng id các đối tượng cần hiển thị. Ví dụ: ids = [103005]
        // var i = [103005];
        // $(this).trigger("thêmDòngs", [i]);
        var C = $(this).closest(".hiểnThị");
        CẦN.db(["chuyênMục.16899", "chuyênLực.16899"], function (i) {
          C.find(".trên .sốTrang").sửaLớp("dn");
          C.find(".bộLọc")
            .empty()
            .append(
              $("<div>", { class: "fs08-xs cb fwn" }).append(
                $("<div>", { class: "dưới flex jcsc col-xs-12" }).append(
                  // Menu sổ
                  $("<div>", { class: "bgcf ma5 bra3 khối" }).append(
                    $("<div>", {
                      id: "ụ",
                      class:
                        "h1 bgcf bn dnb wsn els ma0 koNhãn lấyĐc df aic jcc",
                    }).sổ(
                      (config("chuyênLực.16899") || []).map(function (á) {
                        return { chữ: dữLiệu.tên(á, "ụ"), giáTrị: á };
                      }),
                      {
                        nhãn: "Vui lòng chọn",
                        trống: true,
                        gõ: true,
                        ngay: true,
                        sẵn: (config("chuyênLực.16899") || [])[0],
                        // vôHiệu:true, // Không cho phéo chọn
                        // icon:false,
                        đổi: function (v) {
                          cl("LOG", "Giá trị chọn", v);
                        },
                      }
                    )
                  ),
                  // Date range
                  $("<div>", { class: "bgcf ma5 bra3 khối" }).append(
                    // koLấy
                    $("<div>", {
                      id: "ấ",
                      class:
                        "pa5-xs pa7 bgcf bsi bra3i c9 col-xs-12 flex aic h1 lấyĐc",
                      l: "Chọn khoảng thời gian",
                    })
                      .on("giáTrị", function () {
                        var á = $(this).children("input").iVals(),
                          à = [];
                        á[0] && à.push(">=" + á[0]); // "<=1653284904"
                        á[1] && à.push("<=" + á[1]); // ">=1653284904"
                        // "<>1653254904,1653284904"
                        return à.length > 1 ? "<>" + á : à[0];
                      })
                      .append(
                        $("<input>", {
                          class: "bn bgcfx bra3 col-xs-5 tac fs09-xs els từ",
                          contenteditable: true,
                          placeholder: "Từ ngày",
                        }).chọnNgày({
                          nổi: true,
                          đầu: true, // Mặc định giờ sẽ là giờ đầu ngày
                          // cuối:true, // Mặc định giờ sẽ là giờ cuối ngày
                          ẩn: ["giờ", "phút", "giây"], // Anr thông số không muốn người tương tác
                          địnhDạng: "{j}/{n}/{f}",
                          quáKhứ: true,
                          đổi: function (v) {
                            cl("LOG", "Chọn ngày", v);
                          },
                        }),
                        $.icon("remove:vam,fs14,df,aic,jcsc"),
                        $("<input>", {
                          class:
                            "bn bgcfx bra3 bấmĐc col-xs-5 tac fs09-xs els đến",
                          contenteditable: true,
                          placeholder: "Đến ngày",
                        }).chọnNgày({
                          nổi: true,
                          cuối: true,
                          ẩn: ["giờ", "phút", "giây"],
                          địnhDạng: "{j}/{n}/{f}",
                          quáKhứ: true,
                          đổi: function (v) {
                            cl("LOG", "Chọn ngày", v);
                          },
                        })
                      )
                  ),
                  $("<div>", { class: "fl1 ma5 bgcf bra3 pr ph" }).append(
                    $("<input>", {
                      id: "từKhóa",
                      class:
                        "pa5-xs pa10 pr bgcf bs1e bsi b1sd bn w1 dnbne pr35 h1 fs08-xs",
                      placeholder: "Nhập từ khóa",
                    }).on("keydown", function (e) {
                      if (e.keyCode == 13)
                        lọc.find(".nútTìmKiếm").trigger("click");
                    })
                    // $.icon(
                    //   "close::fs12,mr10,pa,t50,r0,tty,z1,cii,phv,o0,lh1,bấmĐc"
                    // )
                    //   // .tip("Xóa hết")
                    //   .on("click", function () {
                    //     lọc.find("input#từKhóa").iVal("");
                    //   })
                  ),
                  $("<div>", { id: "nútCôngCụ", class: "df aic koLấy" }).append(
                    $("<div>", {
                      class:
                        "nútTìmKiếm cf bấmĐc btn bra3 fwb pa5-xs plr15 ptb10 ttu tacb ttnb bg1 bn bs1e ma5 dib ma0-xs",
                      text: "Tìm kiếm",
                      icon: "search::vam,tty-1p",
                      phím: 13,
                    }).khóa(
                      "click",
                      function (e, g) {
                        var D = C.find(".dưới").toParam();
                        // cl("LOG", "Tìm kiếm", D)
                        xửLý(
                          "đốiTượng.tải.bàiViết",
                          {
                            d: $.gộp(
                              { h: md5(Je(D)) },
                              D.từKhóa && { từKhóa: [D.từKhóa, ["ê"]] },
                              {
                                thuộcTính: $.gộp(
                                  {},
                                  D.ụ && {
                                    ụ: $.gộp(
                                      [D.ụ],
                                      khôngGian.chuyênMục.sau(D.ụ),
                                      ["~|"]
                                    ),
                                  },
                                  D.ấ && { ấ: D.ấ }
                                ),
                              }
                            ),
                          },
                          { chờ: true, cache: true },
                          function (s) {
                            T.trigger("thêmDòngs", [s]);
                            // cl(111, s);
                          }
                        );
                      },
                      1000
                    )
                  )
                )
              )
            );
        });
        // $(".dưới").toParam(); // → // {ụ:123, ấ:">=1653284904"}
        // Cách viết sự kiện và trigger sự kiện
        // $(this).on("training", function(e, a, b, c){
        //     // e là tham số chứa các thông số liên quan sự kiện
        //     cl("LOG", a,b,c);
        // });
        // $(this).trigger("training", "INEVO"); // a → INEVO
        // $(this).trigger("training", [[123]]); // a → [123]
        // $(this).trigger("training", [{a:"INEVO"}]); // a → {a:"INEVO"}
        // $(this).trigger("training", ["INEVO", "I&E"]); // a → INEVO;
      }
    );
  };
  this.khởiTạo = function () {};
})();
// training.cấuHình()
