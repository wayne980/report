/*
 * @Descripttion: 饼图
 * @version:
 * @Author: qianlishi
 * @Date: 2021-08-29 07:28:20
 * @LastEditors: qianlishi qianlishi@anji-plus.com
 * @LastEditTime: 2023-01-11 13:15:48
 */
export const widgetPiechart = {
  code: 'widget-piechart',
  type: 'pieChart',
  tabName: '饼图',
  label: '饼图',
  icon: 'iconicon_tubiao_bingtu',
  options: {
    // 配置
    setup: [
      {
        type: 'el-input-text',
        label: '图层名称',
        name: 'layerName',
        required: false,
        placeholder: '',
        value: '饼图',
      },
      {
        type: 'vue-color',
        label: '背景颜色',
        name: 'background',
        required: false,
        placeholder: '',
        value: ''
      },
      [
        {
          name: '饼图设置',
          list : [
            {
              type: 'el-slider',
              label: '内半径',
              name: 'innerNumber',
              required: false,
              placeholder: '',
              value: 30,
            },
            {
              type: 'el-slider',
              label: '外半径',
              name: 'outerNumber',
              required: false,
              placeholder: '',
              value: 60,
            },
            {
              type: 'el-switch',
              label: '顺时针排布',
              name: 'clockwise',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-select',
              label: '起始角度',
              name: 'startAngle',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 0, name: '0度' },
                { code: 30, name: '30度' },
                { code: 90, name: '90度' },
                { code: 180, name: '180度' },
                { code: 360, name: '360度' }
              ],
              value: 90
            },
            {
              type: 'el-slider',
              label: '最小角度',
              name: 'minAngle',
              require: false,
              placeholder: '',
              value: 0,
            },
            {
              type: 'el-slider',
              label: '不显示标签角度',
              name: 'minShowLabelAngle',
              require: false,
              placeholder: '',
              value: 0,
            },
/*            {
              type: 'el-slider',
              label: '圆角属性',
              name: 'borderRadius',
              required: false,
              placeholder: '',
              value: 10,
            },*/
          ]
        },
        {
          name: '标题设置',
          list: [
            {
              type: 'el-switch',
              label: '标题显示',
              name: 'isNoTitle',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-input-text',
              label: '标题名',
              name: 'titleText',
              required: false,
              placeholder: '',
              value: '',
            },
            {
              type: 'vue-color',
              label: '字体颜色',
              name: 'textColor',
              required: false,
              placeholder: '',
              value: '#FFD700'
            },
            {
              type: 'el-input-number',
              label: '字体字号',
              name: 'textFontSize',
              required: false,
              placeholder: '',
              value: 20
            },
            {
              type: 'el-select',
              label: '字体粗细',
              name: 'textFontWeight',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'bold', name: '粗体' },
                { code: 'bolder', name: '特粗体' },
                { code: 'lighter', name: '细体' }
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体风格',
              name: 'textFontStyle',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'italic', name: 'italic斜体' },
                { code: 'oblique', name: 'oblique斜体' },
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体位置',
              name: 'textAlign',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'center', name: '居中' },
                { code: 'left', name: '左对齐' },
                { code: 'right', name: '右对齐' },
              ],
              value: 'center'
            },
            {
              type: 'el-input-text',
              label: '副标题名',
              name: 'subText',
              required: false,
              placeholder: '',
              value: ''
            },
            {
              type: 'vue-color',
              label: '字体颜色',
              name: 'subTextColor',
              required: false,
              placeholder: '',
              value: 'rgba(30, 144, 255, 1)'
            },
            {
              type: 'el-input-number',
              label: '字体字号',
              name: 'subTextFontSize',
              required: false,
              placeholder: '',
              value: 20
            },
            {
              type: 'el-select',
              label: '字体粗细',
              name: 'subTextFontWeight',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'bold', name: '粗体' },
                { code: 'bolder', name: '特粗体' },
                { code: 'lighter', name: '细体' }
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体风格',
              name: 'subTextFontStyle',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'italic', name: 'italic斜体' },
                { code: 'oblique', name: 'oblique斜体' },
              ],
              value: 'normal'
            },
          ],
        },
        {
          name: '图例操作',
          list: [
            {
              type: 'el-switch',
              label: '图例',
              name: 'isShowLegend',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'vue-color',
              label: '字体颜色',
              name: 'legendColor',
              required: false,
              placeholder: '',
              value: '#fff',
            },
            {
              type: 'el-input-number',
              label: '字体字号',
              name: 'legendFontSize',
              required: false,
              placeholder: '',
              value: 12,
            },
            {
              type: 'el-input-number',
              label: '图例宽度',
              name: 'legendWidth',
              required: false,
              placeholder: '',
              value: 14,
            },
            {
              type: 'el-select',
              label: '横向位置',
              name: 'lateralPosition',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'center', name: '居中' },
                { code: 'left', name: '左对齐' },
                { code: 'right', name: '右对齐' },
              ],
              value: 'center'
            },
            {
              type: 'el-select',
              label: '纵向位置',
              name: 'longitudinalPosition',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'top', name: '顶部' },
                { code: 'bottom', name: '底部' },
              ],
              value: 'top'
            },
            {
              type: 'el-select',
              label: '布局前置',
              name: 'layoutFront',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'vertical', name: '竖排' },
                { code: 'horizontal', name: '横排' },
              ],
              value: 'horizontal'
            },
          ],
        },
        {
          name: '扇区设置',
          list: [
            {
              type: 'el-switch',
              label: '文字高亮',
              name: 'isShowEmphasisLabel',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-input-number',
              label: '字体字号',
              name: 'emphasisLabelFontSize',
              required: false,
              placeholder: '',
              value: 24,
            },
            {
              type: 'vue-color',
              label: '字体颜色',
              name: 'emphasisLabelFontColor',
              required: false,
              placeholder: '',
              value: ''
            },
            {
              type: 'el-select',
              label: '字体粗细',
              name: 'emphasisLabelFontWeight',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'bold', name: '粗体' },
                { code: 'bolder', name: '特粗体' },
                { code: 'lighter', name: '细体' }
              ],
              value: 'bold'
            },
            {
              type: 'el-select',
              label: '字体风格',
              name: 'emphasisLabelFontStyle',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'italic', name: 'italic斜体' },
                { code: 'oblique', name: 'oblique斜体' },
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体系列',
              name: 'emphasisLabelFontFamily',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'Microsoft YaHei', name: '微软雅黑' },
                { code: 'serif', name: 'serif字体' },
                { code: 'Arial', name: 'Arial字体' },
                { code: 'Courier New', name: 'Courier New字体' },
              ],
              value: 'Microsoft YaHei'
            },
            {
              type: 'vue-color',
              label: '描边颜色',
              name: 'borderColor',
              required: false,
              placeholder: '',
              value: ''
            },
            {
              type: 'el-input-number',
              label: '描边宽度',
              name: 'borderWidth',
              required: false,
              placeholder: '',
              value: 1
            },
            {
              type: 'el-select',
              label: '描边类型',
              name: 'borderType',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'solid', name: '实线' },
                { code: 'dashed', name: '虚线' },
                { code: 'dotted', name: '斑点' },
              ],
              value: 'solid'
            },
            {
              type: 'el-input-number',
              label: '阴影系数',
              name: 'shadowBlur',
              required: false,
              placeholder: '',
              value: 10
            },
            {
              type: 'vue-color',
              label: '阴影颜色',
              name: 'shadowColor',
              required: false,
              placeholder: '',
              value: 'rgba(0, 0, 0, 0.5)'
            },
          ],
        },
        {
          name: '数值设定',
          list: [
            {
              type: 'el-switch',
              label: '显示',
              name: 'isShow',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-switch',
              label: '数值显示',
              name: 'numberValue',
              require: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-switch',
              label: '百分比显示',
              name: 'percentage',
              require: false,
              placeholder: '',
              value: false,
            },
            {
              type: 'el-input-number',
              label: '小数点位数',
              name: 'percentPrecision',
              required: false,
              placeholder: '',
              value: 2,
            },
            {
              type: 'el-select',
              label: '位置',
              name: 'position',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'outside', name: '扇区外侧' },
                { code: 'inside', name: '扇区内侧' },
                { code: 'center', name: '扇区中心' }
              ],
              value: 'outside'
            },
            {
              type: 'el-input-number',
              label: '边距',
              name: 'padding',
              require: false,
              placeholder: '',
              value: 0,
            },
            {
              type: 'el-input-number',
              label: '角度',
              name: 'rotate',
              require: false,
              placeholder: '',
              value: 0,
            },
            {
              type: 'el-input-number',
              label: '字体字号',
              name: 'fontSize',
              required: false,
              placeholder: '',
              value: 12,
            },
            {
              type: 'vue-color',
              label: '字体颜色',
              name: 'fontColor',
              required: false,
              placeholder: '',
              value: ''
            },
            {
              type: 'el-select',
              label: '字体粗细',
              name: 'fontWeight',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'bold', name: '粗体' },
                { code: 'bolder', name: '特粗体' },
                { code: 'lighter', name: '细体' }
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体风格',
              name: 'fontStyle',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'italic', name: 'italic斜体' },
                { code: 'oblique', name: 'oblique斜体' },
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体系列',
              name: 'fontFamily',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'Microsoft YaHei', name: '微软雅黑' },
                { code: 'serif', name: 'serif字体' },
                { code: 'Arial', name: 'Arial字体' },
                { code: 'Courier New', name: 'Courier New字体' },
              ],
              value: 'Microsoft YaHei'
            },
            {
              type: 'el-switch',
              label: '引导线显示',
              name: 'isShowLabelLine',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-switch',
              label: '平滑引导线',
              name: 'labelLineSmooth',
              required: false,
              placeholder: '',
              value: false,
            },
            {
              type: 'el-input-number',
              label: '第一段长度',
              name: 'labelLineLength',
              required: false,
              placeholder: '',
              value: 5,
            },
            {
              type: 'el-input-number',
              label: '第二段长度',
              name: 'labelLineLength2',
              required: false,
              placeholder: '',
              value: 15,
            },
            {
              type: 'vue-color',
              label: '线条颜色',
              name: 'lineStyleColor',
              required: false,
              placeholder: '',
              value: ''
            },
            {
              type: 'el-input-number',
              label: '线条宽度',
              name: 'lineStyleWidth',
              required: false,
              placeholder: '',
              value: 1
            },
            {
              type: 'el-select',
              label: '线条类型',
              name: 'lineStyleType',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'solid', name: '实线' },
                { code: 'dashed', name: '虚线' },
                { code: 'dotted', name: '斑点' },
              ],
              value: 'solid'
            },
          ],
        },
        {
          name: '提示语设置',
          list: [
            {
              type: 'el-switch',
              label: '显示',
              name: 'isShowTooltip',
              required: false,
              placeholder: '',
              value: true,
            },
            {
              type: 'el-input-number',
              label: '字体字号',
              name: 'tooltipFontSize',
              required: false,
              placeholder: '',
              value: 16
            },
            {
              type: 'vue-color',
              label: '字体颜色',
              name: 'tooltipColor',
              required: false,
              placeholder: '',
              value: '#00FEFF'
            },
            {
              type: 'el-select',
              label: '字体粗细',
              name: 'tooltipFontWeight',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'bold', name: '粗体' },
                { code: 'bolder', name: '特粗体' },
                { code: 'lighter', name: '细体' }
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体风格',
              name: 'tooltipFontStyle',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'normal', name: '正常' },
                { code: 'italic', name: 'italic斜体' },
                { code: 'oblique', name: 'oblique斜体' },
              ],
              value: 'normal'
            },
            {
              type: 'el-select',
              label: '字体系列',
              name: 'tooltipFontFamily',
              required: false,
              placeholder: '',
              selectOptions: [
                { code: 'Microsoft YaHei', name: '微软雅黑' },
                { code: 'serif', name: 'serif字体' },
                { code: 'Arial', name: 'Arial字体' },
                { code: 'Courier New', name: 'Courier New字体' },
              ],
              value: 'Microsoft YaHei'
            },
          ],
        },
        {
          name: '边距设置',
          list: [
            {
              type: 'el-slider',
              label: '左边距(像素)',
              name: 'left',
              required: false,
              placeholder: '',
              value: 0,
            },
            {
              type: 'el-slider',
              label: '右边距(像素)',
              name: 'right',
              required: false,
              placeholder: '',
              value: 0,
            },
            {
              type: 'el-slider',
              label: '顶边距(像素)',
              name: 'top',
              required: false,
              placeholder: '',
              value: 0,
            },
            {
              type: 'el-slider',
              label: '底边距(像素)',
              name: 'bottom',
              required: false,
              placeholder: '',
              value: 0,
            },
          ],
        },
        {
          name: '自定义配色',
          list: [
            {
              type: 'customColor',
              label: '',
              name: 'customColor',
              required: false,
              value: [{ color: '#0CD2E6' }, { color: '#00BFA5' }, { color: '#FFC722' }, { color: '#886EFF' }, { color: '#008DEC' }],
            },
          ],
        },
        {
          name: '组件联动',
          list: [
            {
              type: 'componentLinkage',
              label: '',
              name: 'componentLinkage',
              required: false,
              value: []
            }
          ]
        }
      ],
    ],
    // 数据
    data: [
      {
        type: 'el-radio-group',
        label: '数据类型',
        name: 'dataType',
        require: false,
        placeholder: '',
        selectValue: true,
        selectOptions: [
          {
            code: 'staticData',
            name: '静态数据',
          },
          {
            code: 'dynamicData',
            name: '动态数据',
          },
        ],
        value: 'staticData',
      },
      {
        type: 'el-input-number',
        label: '刷新时间(毫秒)',
        name: 'refreshTime',
        relactiveDom: 'dataType',
        relactiveDomValue: 'dynamicData',
        value: 600000
      },
      {
        type: 'el-button',
        label: '静态数据',
        name: 'staticData',
        required: false,
        placeholder: '',
        relactiveDom: 'dataType',
        relactiveDomValue: 'staticData',
        value: [{ "value": 1048, "name": "搜索引擎" }, { "value": 735, "name": "直接访问" }, { "value": 580, "name": "邮件营销" }, { "value": 484, "name": "联盟广告" }, { "value": 300, "name": "视频广告" }]
      },
      {
        type: 'dycustComponents',
        label: '',
        name: 'dynamicData',
        required: false,
        placeholder: '',
        relactiveDom: 'dataType',
        chartType: 'widget-piechart',
        relactiveDomValue: 'dynamicData',
        dictKey: 'PIE_PROPERTIES',
        value: '',
      },
    ],
    // 坐标
    position: [
      {
        type: 'el-input-number',
        label: '左边距',
        name: 'left',
        required: false,
        placeholder: '',
        value: 0,
      },
      {
        type: 'el-input-number',
        label: '上边距',
        name: 'top',
        required: false,
        placeholder: '',
        value: 0,
      },
      {
        type: 'el-input-number',
        label: '宽度',
        name: 'width',
        required: false,
        placeholder: '该容器在1920px大屏中的宽度',
        value: 400,
      },
      {
        type: 'el-input-number',
        label: '高度',
        name: 'height',
        required: false,
        placeholder: '该容器在1080px大屏中的高度',
        value: 300,
      },
    ],
  }
}
