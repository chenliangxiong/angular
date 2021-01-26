import { Component, OnInit } from "@angular/core";
import { PickerController } from "@ionic/angular";
import { PickerService } from "../picker.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  Options: any = {
    header: "開放身份",
    subHeader: "Select your favorite color",
  };
  public roleOptions = [["全部", "老師", "學生", "家長"]];
  public roleText = "開放身份"; //选择的角色
  public subjectOptions = [
    [
      "全部學科",
      "體育",
      "科學",
      "語文",
      "數學",
      "英語",
      "音樂",
      "美術",
      "品德與生活",
      "信息技術",
      "計算機",
    ],
  ];
  public subjectText = "全部學科"; //选择的学科
  constructor(
    public pickercontroller: PickerController,
    public pickerService: PickerService
  ) {}

  ngOnInit() {}
  pickerFn($start, $length, $option, type) {
    let that = this;
    this.pickerService.openPicker($start, $length, $option, function (result) {
      let vals = JSON.parse(result)["col-0"].text;
      switch (type) {
        case "role":
          that.roleText = vals;
          break;
        case "subject":
          that.subjectText = vals;
          break;
        default:
          break;
      }
    });
  }
}
