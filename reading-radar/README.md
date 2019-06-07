# Reading Radar

The Technology Radar is a tool to inspire and support teams to pick the best technologies for new projects. It sets out the changes in technologies that are interesting in software development: changes that you may think your engineering teams should pay attention to and consider using in their projects.

## Cool. How can I make my own?

1. Install Ruby https://rubyinstaller.org/
1. run `gem install liquid` if necessary
1. Edit the spreadsheet as necessary
1. run `ruby transform.rb` in your CLI to generate a new `radar_data.js`
1. open `index.html` in your browser to inspect the result

## Edit the titles

Open the js/Values.js file and change the following strings:

	var RadarTitle = "Title";  
	var RadarSubTitle = "Subtitle";  
	var RadarDate = "12/12/2017";
	var RadarFooterTitle = "Footer Title";
	var RadarFooterSubTitle = "Footer SubTitle";


## Speadsheet schema

| Column |   Definition  |
|:------:|:-------------:|
|    A   |   Node name   |
|    B   |    Quadrant   |
|    C   | Hover comment |
|    D   | Ring position |

## Ring position maping

| Score | Ring  |
|:-----:|:-----:|
|   0   | ADOPT |
|   1   | TRIAL |
|   2   | TRIAL |
|   3   | HOLD  |

---
| Score | Ring  | Ring  |
|:-----:|:-----:|:-----:|
|   0   | ADOPT | 读完 |
|   1   | TRIAL | 在读 |
|   2   | access | 想读 |
|   3   | HOLD  | 发现  |

| Score | Ring  |
|:-----:|:-----:|
|   Techniques & Tools   | 个人管理 |
|   Data Management   | 科学原理 |
|   Platforms & InfrastructurePlatforms & Infrastructure   | 其他 |
|   Languages & Frameworks   | 工程技术 |
