// Giải thích tham số
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
// 169931: id của trang cá nhân inevo
var theader = [
  { id: "0", text: "STT" },
  { id: "ố", text: "ID" },
  { id: "ộ", text: "Thay đổi tại" },
  { id: "ũ", text: "Nội dung cũ" },
  { id: "ớ", text: "Nội dung mới" },
  { id: "ờ", text: "Thời gian" },
];

bangQuanTri = new (function () {
  this.cấuHình = function (W, K) {
    var H,
      I = "bàiViết";
    W.find("#chứaBảng").append((H = $("<div>", { class: "hiểnThị" })));
    W.find("#cộtTrái").sửaLớp("-dne -bgcfx -br1 -bsda pb35 pr br3 w16 koCuộn");
    W.find("#cộtTrái").css({
      background:
        "radial-gradient(circle, rgba(34,155,195,1) 0%, rgba(53,163,82,1) 100%)",
    });

    W.closest(".động").css("height", "calc(100% - 50px)");
    W.find("#chứaBảng .chứa").first().sửaLớp("dn");

    var arrow = false,
      báoCáo = false,
      ụChính;

    const menuTrai = function (menuCha, O) {
      var chính = config("chuyênLực." + menuCha);
      var result = $("<div>", { class: "mt15 tabĐiềuHướng" }).cần(
        ["chuyênMục." + chính, "chuyênLực." + chính],
        function () {
          $(this).append(
            (chính || []).map(function (itemId) {
              var phụ = config("chuyênLực." + itemId);
              return $("<div>", { class: "" }).append(
                $("<div>", {
                  class:
                    (O.cấp ? "bra20 bgcf c0 " : "brr20 bgcf c0 ") +
                    " plr10 mt25 ptb7 w85 cpi df jcsb aic cfh bgcg3h tab menuCha ",
                })
                  .append(
                    $.icon("category::fs1"),
                    $("<c>", {
                      class: "dib fwb ttu ụGiáTrị f1 ml5 fs12p menuTitle",
                      text: dữLiệu.tên(itemId, "ụ"),
                    }),
                    !empty(phụ) &&
                      $("<div>", { class: "cpi tfs14h" })
                        .append($.icon("expand_more:: fs16"))
                        .click(function (e) {
                          e.stopPropagation();
                          result.find(".subMenu" + itemId).slideToggle();
                        })
                  )
                  .click(function (e) {
                    ụChính = itemId;
                    báoCáo = false;

                    // $(this).closest(".menuCha").sửaLớp("bgcg3 -bgcf");
                    // result.find(".menuCha").sửaLớp("-bgcg3 bgcf");
                    
                    $(".bgcg3").sửaLớp("-bgcg3 -cf");
                    $(this).sửaLớp("bgcg3 cf");
                    $(".bộLọc").find(".nútTìmKiếm").trigger("click");
                  }),
                !empty(chính) &&
                  $("<div>", {
                    class: "mtb10 bgct pl10 dn " + ("subMenu" + itemId),
                  }).append(
                    chính &&
                      menuTrai(itemId, {
                        cấp: O.cấp ? O.cấp + 1 : 1,
                      })
                  )
              );
            })
          );
        }
      );
      return result;
    };

    // Cấu hình cột thuộc tính
    var ộ = {
      chứcNăng: {
        ê: "Chức năng",
        // sửaĐc:false, // Không cho phép sửa trực tiếp trong td
        ă: "c", //l,c,r: left, center,right
        sửaĐc: false,
        ã: function () {
          $(this).sửaLớp("ptb5 w50p");
          $(this)
            .empty()
            .append(
              $.icon("menu::vam,fs18,c0,bấmĐc").on("click", function () {
                $(this).chọn(
                  [
                    {
                      ê: "Làm mới",
                      i: "cached::vam,cod",
                      f: function () {
                        r.trigger("mới"); // Tải và hiển thị lại dòng, r là thẻ <tr>
                      },
                    },
                    {
                      ê: "Xem bài viết",
                      i: "visibility::vam,cg,links",
                      f: function () {
                        vàoURL(dữLiệu.url(i, "ế")); // Vào xem bài viết qua url
                      },
                    },
                    {
                      ê: "Sửa bài viết",
                      i: "edit::vam,cod,links",
                      f: function () {
                        khôngGian.bàiViết.sửa(i);
                      },
                    },
                    {
                      ê: "Lịch sử chỉnh sửa",
                      i: "history::vam,links,cr4",
                      f: function () {
                        xửLý(
                          "remote.function.logLịchSử",
                          { d: { bảng: "bàiViết", trong: [i] } },
                          function (s) {
                            s.d.length > 0
                              ? $(this)
                                  .empty()
                                  .append(
                                    khung(
                                      $("<div>", { class: "pa10" }).append(
                                        $("<div>", {
                                          class:
                                            "fwb ptb10 ttu tac cl1 fs15 fs12-xs",
                                          text: "Lịch sử thay đổi bài viết",
                                        }).append(
                                          $.icon(
                                            "schedule::ffi usn bra30 tac fsn notranslate wh1e oh bscb dfn vam tty-1p mr02"
                                          )
                                        ),
                                        $("<table>", {
                                          class: "optimized mt10 bsni",
                                        }).append(
                                          $("<thead>").append(
                                            $("<tr>", {
                                              class: "header bgcfx bni",
                                            }).append(
                                              theader.map(function (item) {
                                                return $("<th>", {
                                                  id: item.id,
                                                  class: "o1b crb tac",
                                                  text: item.text,
                                                });
                                              })
                                            )
                                          ),
                                          $("<tbody>", {
                                            class: "danhSách",
                                          }).append(
                                            s.d.map(function (item, index) {
                                              return $("<tr>", {
                                                class: "pa5",
                                              }).append(
                                                $("<td>", { text: index }),
                                                $("<td>", { text: item.ố }),
                                                $("<td>", { text: item.ộ }),
                                                $("<td>", { text: item.ũ }),
                                                $("<td>", { text: item.ớ }),
                                                $("<td>", {
                                                  text: iDate(
                                                    item.ờ,
                                                    "DD/MM/YYYY - hh:mm"
                                                  ),
                                                })
                                              );
                                            })
                                          )
                                        )
                                      )
                                    ),
                                    "__khung",
                                    {}
                                  )
                              : thôngBáo.lưuÝ("Không có lịch sử chỉnh sửa!");
                          }
                        );
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
      i: {
        ê: "Id bài viết",
        sửaĐc: false,
        ẩ: true,
        ă: "c",
        ã: function () {
          $(this).sửaLớp("fwb,cl1");
        },
      },
      ê: {
        ê: "Tiêu đề",
        // koChờ:true,
        sửaĐc: false,
        ã: function () {
          // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
          $(this).sửaLớp("fwb,cl1,bấmĐc").cắtDòng(2);
          $(this).click(function () {
            vàoURL(dữLiệu.url(i, "ế"));
          });
          // $(this).text("Training")
        },
        ộ: "200",
        // bắtBuộc: false,
        // chúThích: "<br>",
        // chỉHiệnVớiAdmin: false,
        // gõ: false,
        // koChờ: false,
        // koSẵn: false,
        // kếThừa: false,
        // trống: false,
        // á: {_fe0EX: {…}, _Cce6q: {…}},
        // ò: false,
        // ạ: "select",
        // ẩ: false,
        // ắ: true
        // ề: thêm được nhiều file
      },
      ô: {
        ê: "Mô tả",
        // ă: "c", //Căn giữa
        sửaĐc: false,

        ã: function () {
          // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
          $(this).text(dữLiệu.môTả(i, "ế"));
          $(this).append();
          $(this).cắtDòng(2);
        },
        ộ: "300",
      },
      ụ: {
        ê: "Chuyên mục",
        koChờ: true,
        ă: "c", //Căn giữa
        // sửaĐc: false,
        ã: function () {
          // v = "Training"; // → Giá trị thuộc tính của đối tượng hiển thị
          var item = Jd(v).join();
          x.sửaLớp("fwb,cl1,ttu,bấmĐc");
          x.click(function () {
            vàoURL(dữLiệu.url(item, "ụ")); // Vào xem bài viết qua url
          });
          v = dữLiệu.tên(item, "ụ");
        },
      },

      ấ: {
        ê: "Thời gian đăng",
        ă: "c", //Căn giữa
        ạ: "date", //kiểu dữ liệu
        f: "DD/MM/YYYY", //Định dạng
        sửaĐc: false,
        // ộ: "80",
      },
      ậ: {
        ê: "Cập nhật",
        ă: "c", //Căn giữa
        ạ: "date", //kiểu dữ liệu
        f: "DD/MM/YYYY", //Định dạng
        sửaĐc: false,
        // ộ: "80",
      },
      p: {
        ê: "Trạng thái",
        ă: "c",
        ạ: "",
        sửaĐc: false,
        ã: function () {
          v == 1
            ? $(this).empty().append($.icon("public:fs1 cg1")).tip("Công khai")
            : $(this)
                .empty()
                .append($.icon("lock:fs1 cr2"))
                .tip("Không công khai");
        },
      },
      ở: {
        ê: "Người đăng",
        ă: "c",
        ạ: "tag", // kiểu dữ liệu
        ố: ["à"], //bảng: chọn à: tài khoản, ị: định nghĩa
        koChờ: true, // thực hiện gán giá trị v trước
        ảnh: true, //Hiển thị ảnh đại diện
        sửaĐc: false,
        ã: function () {
          $(this).sửaLớp("cl1");
          $(this).tip();
          v = { à: [v] }; //{\"à\":[\"127453\"]};
        },
      },
      è: {
        ê: "Tệp đính kèm",
        ă: "c",
        ạ: "file",
        koChờ: true,
        ề: true, // thêm được nhiều file
        sửaĐc: false,
        ộ: "80",

        ã: function () {
          if (v != "[]") {
            v = '{"ậ":' + v + "}";
            // v = { ậ: [v] }; //{\"à\":[\"127453\"]};
          }
        },
      },
    };
    H.bảng(
      I,
      {
        // Cấu hình chung
        tiêuĐề: "Quản trị bài viết - Hoang The Nhan", // Tiêu đề bảng
        cỡChữ: 12, // Cỡ chữ hiển thị trên toàn khung
        mới: true, // Bảng kiểu mới
        chân: false, // Chân bảng
        khung: true, // Hiển thị khung → Nếu false → chỉ lần phần chứa giao diện khung bảng trở vào
        href: false, // Không hiển thị URL
        cộtGộp: ộ, // Tạo cấu hình cột (thuộc tính)
        cộts: $.gộp(["stt"], Object.keys(ộ)), // Danh sách ID cột (thuộc tính) cần hiển thị
        // nútBỏ:[], // Danh sách nút mặc định trên bảng cần loại bỏ
        // ẩnCột:true,
        bảng: {
          // mới: true, // Bảng kiểu mới
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
          sửaĐc: true, // Cho phép sửa trực tiếp trên dòng (sửa giá trị td)
          phânTrang: true, // Hiển thị phân trang
          nútBỏ: ["thêmDòng"],
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
        var T = $(this); //Bảng mới
        var P = T.find("#phụ").sửaLớp("ptb15");
        H.find(".nútPhải").find(".bấmĐc").sửaLớp("-dn");
        H.find(".header").css({
          background:
            "radial-gradient(circle, rgba(34,155,195,1) 0%, rgba(53,163,82,1) 100%)",
        });
        H.find(".filter").css({
          background:
            "radial-gradient(circle, rgba(34,155,195,1) 0%, rgba(53,163,82,1) 100%)",
        });
        H.find(".tiêuĐềBảng").before(
          $("<div>", { class: "mt10" }).append(
            $("<div>", {
              class: "bấmĐc dib ml15 ptb5 plr10 bg1o1 bra10 arrowBtn wfc",
            })
              .append($.icon(`menu_open::fs16 fwb cr2`))
              .click(function () {
                if (!arrow) {
                  $(this)
                    .empty()
                    .append($.icon(`left_panel_open::fs16 fwb cgd`));
                  $("#cộtTrái").sửaLớp("-w16 w0 dn");
                } else {
                  $(this)
                    .empty()
                    .append($.icon("menu_open::fs16 fwb bấmĐc cr2"));
                  $("#cộtTrái").sửaLớp("-w0 w16 -dn");
                }
                return (arrow = !arrow);
              })
              .tip("Đóng/Mở menu"),
            $("<div>", {
              class: "bấmĐc dib ml15 ptb5 plr10 đổiKiểu bg1o1 bra10 bg1o1h",
            })
              .append(
                $.icon("vertical_split::fs16 cdg"),
                $("<div>", { class: "dib ml5", text: "Bảng" })
              )
              .click(function () {
                $(".đổiKiểu").sửaLớp("-bg1o1");
                $(this).sửaLớp("bg1o1");
                T.find(".header").show();
                T.find("tbody").show();
                T.find("#trPhụ").hide();
                P.sửaLớp("ẩn");
                isGrid = false;
                $(".bộLọc").find(".nútTìmKiếm").trigger("click");
              }),
            $("<div>", {
              class: "bấmĐc dib ml15 ptb5 plr10 bra10 bg1o1h đổiKiểu",
            })
              .append(
                $.icon("dashboard::fs16 cdg"),
                $("<div>", { class: "dib ml5", text: "Lưới" })
              )
              .click(function () {
                $(".đổiKiểu").sửaLớp("-bg1o1");
                $(this).sửaLớp("bg1o1");
                T.find(".header").hide();
                T.find("tbody").hide();
                T.find("#trPhụ").show();
                P.sửaLớp("-ẩn");
                isGrid = true;
                // $(".bộLọc").find(".nútTìmKiếm").trigger("click");
                T.trigger("hiệnLưới");
              })
          )
        );

        // Nút chuyển dạng hiển thị bảng hoặc dạng lưới
        T.find("#trPhụ").hide();
        // this → Thẻ table;
        // Sự kiện thêm dòng vào bảng → Sự kiện được trigger vào thẻ table
        // Thêm 1 dòng → .trigger("thêmDòng", i)
        // Thêm dòng dạng phân trang → .trigger("thêmDòngs", [ids]); // ids → mảng id các đối tượng cần hiển thị. Ví dụ: ids = [103005]
        // var i = [103005];
        // $(this).trigger("thêmDòngs", [i]);
        // var C = $(this).closest(".hiểnThị"); //Thẻ .hiểnThị gần nhất chứa $(this là bảng mới)

        // Hàm rander dữ liệu bảng
        var renderRow = function (mụcMenuTrai) {
          var mụcChính = $(".ụChính").iVal() || "16853";
          CẦN.db(
            ["chuyênMục." + mụcChính, "chuyênLực." + mụcChính],
            function () {
              var D = T.find(".dưới").toParam();
              xửLý(
                "đốiTượng.tải.bàiViết",
                {
                  // $.gộp trả về object hoặc array được nối tương tự như phương thức concat()
                  //d: {"h":"9148f2f0534a4d8f4bf3cf623369fca3","thuộcTính":{"ụ":["16853","12264","12268","12448","12449","12450","12269","~|"],"ấ":">=1688576400"}}
                  //{"quanHệ":{"quanHệ":"-sởHữuBáoCáo","bảng":"thờiGian","đốiTượng":""}
                  //id của bảng chứa các bài viết sở hữu bài báo cáo là "thờiGian"
                  d: báoCáo
                    ? {
                        quanHệ: {
                          quanHệ: "-sởHữuBáoCáo",
                          bảng: "thờiGian",
                          đốiTượng: "",
                        },
                        thuộcTính: { ở: "169931" },
                      }
                    : $.gộp(
                        { h: md5(Je(D)) },
                        D.từKhóa && { từKhóa: [D.từKhóa, ["ê", "ộ", "ụ"]] },
                        {
                          thuộcTính: $.gộp(
                            $("#caNhan").iVal() == "169931"
                              ? $.gộp(
                                  { ở: "169931" },
                                  ụChính == "4056" ? { ụ: ["4056"] } : {}
                                )
                              : mụcChính && {
                                  ụ: $.gộp(
                                    [],
                                    mụcMenuTrai
                                      ? [mụcMenuTrai]
                                      : $.gộp(
                                          [mụcChính],
                                          khôngGian.chuyênMục.sau(mụcChính)
                                        ),
                                    ["~|"]
                                  ),
                                },
                            D.ấ && { ấ: D.ấ },
                            D.p && { p: D.p }
                          ),
                        }
                      ),
                },
                { chờ: true, cache: true },
                function (s) {
                  T.trigger("thêmDòngs", [s]); //kích hoạt sự kiện thêm dòng của thẻ T (bảng mới)
                }
              );
            }
          );
        };
        CẦN.db(["chuyênMục.16853", "chuyênLực.16853"], function () {
          W.find("#cộtTrái")
            .empty()
            .append(
              // Menu sổ
              $("<div>", { class: "khối mt10" }).append(
                $("<div>", { class: "cpi arrow_back ml10 mb10" })
                  .empty()
                  .append($.icon("arrow_back::fs16 fwb cgd bấmĐc cf"))
                  .click(function () {
                    // $(this).sửaLớp("dn");
                    arrow = !arrow;

                    $("#cộtTrái")
                      .sửaLớp("w16", arrow ? "-" : "")
                      .find(".tabĐiềuHướng")
                      .sửaLớp("dncc", arrow ? "" : "-");
                    if (arrow) {
                      $(this)
                        .empty()
                        .append($.icon("arrow_forward::fs16 fwb cgd bấmĐc cf"));
                      $("#cộtTrái").sửaLớp("-w16 w5");
                      $("#cộtTrái").find(".menuContent").sửaLớp("dn");
                      $("#cộtTrái").find(".menuIcons").sửaLớp("-dn");
                      $("#cộtTrái").find(".menuTitle").sửaLớp("dn");
                    } else {
                      $(this)
                        .empty()
                        .append($.icon("arrow_back::fs16 fwb cgd bấmĐc cf"));
                      $("#cộtTrái").sửaLớp("-w5 w16 -dn");
                      $("#cộtTrái").find(".menuContent").sửaLớp("-dn");
                      $("#cộtTrái").find(".menuIcons").sửaLớp("dn");
                      $("#cộtTrái").find(".menuTitle").sửaLớp("-dn");
                    }
                  })
                  .tip("Thu gọn menu"),
                $("<div>", {
                  id: "caNhan",
                  class:
                    "bgcf bn dnb wsn els ma0 koNhãn lấyĐc df aic plr5 ttu c0 fwb ptb10 bgcg3h cfh",
                }).sổ(
                  [
                    { chữ: "Bài viết theo chuyên mục", giáTrị: "123" },
                    { chữ: "Bài viết cá nhân", giáTrị: "169931" },
                  ],
                  {
                    nhãn: "Vui lòng chọn",
                    trống: true,
                    // gõ: true,
                    ngay: true,
                    sẵn: "123",
                    // vôHiệu:true, // Không cho phéo chọn
                    // icon:false,
                    đổi: function (v) {
                      // cl(222, v);
                      báoCáo = false;
                      ụChính = "";
                      if (v == "169931") {
                        $(".menu_container").sửaLớp("dn");
                        $(".menu_radio")
                          .empty()
                          .append(
                            $("<div>", {
                              class:
                                " ptb5 plr7 bgcf c0 fwb ttu brr20 bgcg3h cfh cpi báoCáo w80",
                              text: "Bài báo cáo",
                            }).click(function () {
                              báoCáo = true;
                              $(".bgcg3").sửaLớp("-bgcg3 -cf");
                              $(this).sửaLớp("bgcg3 cf ");
                              $(".bộLọc").find(".nútTìmKiếm").trigger("click");
                            })
                          ),
                          $(".bộLọc").find(".nútTìmKiếm").trigger("click");
                      } else {
                        $(".menu_container").sửaLớp("-dn");
                        $(".menu_radio").empty();
                        $(".bộLọc").find(".nútTìmKiếm").trigger("click");
                      }
                    },
                  }
                )
              ),
              $("<div>", { class: "menu_radio mt25" }),
              $("<div>", { class: "menu_container" })
                .empty()
                .append(
                  // Menu sổ
                  $("<div>", { class: "mt25 w90" }).append(
                    $("<div>", {
                      id: "ụ",
                      class:
                        " h1 bgcf bn dnb ma0 koNhãn lấyĐc df aic plr5 ttu c0 fwb ụChính ptb10 bgcg3h cfh brr20 fs13p",
                    }).sổ(
                      (config("chuyênLực.16853") || []).map(function (á) {
                        return {
                          chữ: dữLiệu.tên(á, "ụ"),
                          giáTrị: á,
                          bo: "pr25",
                        }; // mảng các object kiểu {chữ:"text",giá trị:xyz}
                      }),
                      {
                        nhãn: "Vui lòng chọn",
                        trống: true,
                        // gõ: false,
                        ngay: true,
                        sẵn: (config("chuyênLực.16853") || [])[0],
                        // vôHiệu:true, // Không cho phéo chọn
                        // icon:false,
                        đổi: function (v) {
                          báoCáo = false;
                          ụChính = "";
                          cl(222, v);
                          $(".menu_content")
                            .empty()
                            .append(
                              $("<div>", { class: "ptb15" }).append(
                                menuTrai(v, 1)
                              )
                            );
                          $(".bộLọc").find(".nútTìmKiếm").trigger("click");
                        },
                      }
                    )
                  ),
                  $("<div>", { class: "menu_content" })
                )
            );

          // W.find("#cộtTrái").hover(
          //   function () {
          //     $(this).find(".tabĐiềuHướng").sửaLớp("-dncc");
          //     $(".ụChính").sửaLớp("-dn");
          //   },
          //   function () {
          //     if (arrow) {
          //       $(this).find(".tabĐiềuHướng").sửaLớp("dncc");
          //       $(".ụChính").sửaLớp("dn");
          //     }
          //   }
          // ),
            T.on("tạoTrang thêmDòngsXong hiệnLưới", function (e) {
              cl(111, e);
              switch (e.type) {
                case "tạoTrang":
                case "thêmDòngsXong":
                  P.empty();
                  if (e.type == "thêmDòngsXong") {
                    !P.is(":hidden") && T.trigger("hiệnLưới");
                  }
                  break;
                case "hiệnLưới":
                  var v = T.data("xemDòng");
                  P.empty().append(
                    $("<div>", { class: "flex jcfs" }).append(
                      (v || []).map(function (itemId) {
                        var cMục = Jd(config("bàiViết." + itemId + ".ụ")).join(
                          ""
                        );
                        return $("<div>", {
                          class: "col-xs-12 col-sm-3 plr10 mtb10",
                        }).append(
                          $("<div>", {
                            class: "bóng pa10 bra10 h1 df jcsb fdc",
                          }).append(
                            $("<div>", {
                              class: "c0 fwb wbox mb10 bấmĐc crdh",
                              rows: "2",
                              text: dữLiệu.tên(itemId, "ế"),
                            }).click(function () {
                              vàoURL(itemId, "ế");
                            }),
                            $("<div>", {
                              class: "wbox mb15",
                              rows: "3",
                              text: dữLiệu.môTả(itemId, "ế"),
                            }),
                            $("<span>", {
                              class:
                                "fwb c0 mb25 dib bss bw1 bc0 pa5 fs09 bấmĐc crdh",
                              text: dữLiệu.tên(cMục, "ụ"),
                            })
                              .tip("Xem chuyên mục")
                              .click(function () {
                                vàoURL(cMục, "ụ");
                              }),
                            $("<div>", { class: "df jcsb" }).append(
                              $("<div>", {
                                class: "fwb cg1 bấmĐc crdh",
                                text: "Xem thêm",
                              }).click(function () {
                                vàoURL(itemId, "ế");
                              }),
                              $("<div>", { class: "fwb cod bấmĐc crdh ml5" })
                                .append(
                                  $.icon("settings::vam,ml5"),
                                  $("<span>", { text: "Sửa bài viết" })
                                )
                                .click(function () {
                                  khôngGian.bàiViết.sửa(itemId);
                                }),
                              $("<div>", { class: "df" }).append(
                                $.icon("schedule:: fs12 mr5"),
                                $("<div>", {
                                  class: "",
                                  text: iDate(
                                    config("bàiViết." + itemId + ".ấ"),
                                    "DD/MM/YYYY"
                                  ),
                                }).tip("Thời gian xuất bản")
                              )
                            )
                          )
                        );
                      })
                    )
                  );
                  break;
              }
            });
          T.closest(".hiểnThị")
            .find(".bộLọc")
            .empty()
            .append(
              $("<div>", { class: "fs08-xs cb fwn w90" }).append(
                $("<div>", { class: "dưới flex jcsc col-xs-12" }).append(
                  // Công khai
                  $("<div>", { class: "bgcf ma5 bra30 khối" }).append(
                    $("<div>", {
                      id: "p",
                      class: "lấyĐc bn plr10 bgcf h1 df aic koNhãn",
                      l: "Chọn trạng thái",
                    }).sổ(
                      [
                        { chữ: "Bài viết công khai", giáTrị: "1" },
                        { chữ: "Bài viết không công khai", giáTrị: "0" },
                      ],
                      {
                        nhãn: "Vui lòng chọn",
                        trống: true,
                        // gõ: false,
                        ngay: true,
                        sẵn: "",
                        // vôHiệu:true, // Không cho phéo chọn
                        // icon:false,
                        đổi: function (v) {},
                      }
                    )
                  ),

                  // Date range
                  $("<div>", { class: "bgcf ma5 bra30 khối" }).append(
                    // koLấy
                    $("<div>", {
                      id: "ấ",
                      class:
                        "pa5-xs pa7 bgcf bsi bra30i c9 col-xs-12 flex aic h1 lấyĐc chọnThờiGian",
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
                          class: "bn bgcfx bra30 tac fs09-xs els từ w100",
                          // contenteditable: true, //Có thể đặt con trỏ chuột và sửa text từ bàn phím
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
                            "bn bgcfx bra30 bấmĐc tac fs09-xs els đến w100",
                          // contenteditable: true,
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
                  // Tìm kiếm
                  $("<div>", {
                    class: "f1 ma5 bgcf bra30 pr ph df jcsb",
                  }).append(
                    $("<input>", {
                      id: "từKhóa",
                      class:
                        "pa5-xs pa10 pr bgcf c0 fs11 bsi b1sd bn w1 bne pr35 h1 fs08-xs toe",
                      placeholder: "Tìm kiếm theo tiêu đề và nội dung bài viết",
                    }).on("keydown", function (e) {
                      if (e.keyCode == 13)
                        $(".bộLọc").find(".nútTìmKiếm").trigger("click"); //kích hoạt sự kiện click của thẻ nútTìmKiếm
                      if (e.target.value) {
                        $(".close_input").show();
                      } else {
                        $(".close_input").hide();
                      }
                    }),
                    $.icon(
                      "close::fs14,mr10,bấmĐc,pa,tty,r0,t50,dn,close_input"
                    )
                      .tip("Xóa hết")
                      .on("click", function () {
                        $(".bộLọc").find("input#từKhóa").iVal("");
                        $(".bộLọc").find("input#từKhóa").focus();
                      })
                  ),
                  $("<div>", { id: "nútCôngCụ", class: "df aic koLấy" }).append(
                    $("<div>", {
                      class:
                        "nútTìmKiếm cf bấmĐc btn bra5 fwb pa5-xs plr15 ptb7 ttu tacb ttnb bn  ma5 dib ma0-xs fs09 cfh",
                      text: "Tìm kiếm",
                      icon: "search::vam,tty-1p,fs16",
                      phím: 13,
                    })
                      .khóa(
                        "click",
                        function () {
                          renderRow(ụChính);
                        },
                        1000
                      )
                      .chờGọi("click", 456, false)
                      .css({
                        background:
                          "linear-gradient(90deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)",
                      }),
                    $("<div>", {
                      class:
                        "nútXoáTìmKiếm cr3 cr1h bấmĐc bra5 fwb pa5-xs plr15 ptb7 ttu tacb ttnb bn ma5 dib ma0-xs fs09",
                      text: "Xoá hết",
                      icon: "delete_history::vam,tty-1p,fs16",
                      phím: 13,
                    }).click(function () {
                      $(".bộLọc").find("input#từKhóa").iVal("");
                      $(".bộLọc").find("input#từKhóa").focus();
                      $(".bộLọc").find("input#chọnNgày").iVal();
                    })
                  )
                )
              )
            );
        });

        // $(".dưới").toParam(); // → // {ụ:123, ấ:">=1653284904"}
        // nếu class có lấyĐc thì id ở dạng nào thì toParam vẫn lấy, còn nếu ko thì chỉ lấy các id dạng tiếng việt hoặc dạng số, nếu ko muốn lấy id đó thì thêm koLấy
        // Cách viết sự kiện và trigger sự kiện, trigger có thể kích hoạt 1 sự kiện mặc định hoặc sự kiệ tự tạo của 1 thẻ được chỉ định
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
