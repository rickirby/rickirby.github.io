# Good News

### Description

This News App serves as a showcase of my expertise in mastering various third-party frameworks commonly used by leading tech companies in Indonesia. The app leverages `AsyncDisplayKit` (Texture) to build a smooth and efficient UI, `RxSwift` to implement reactive programming, and `Quick` & `Nimble` for comprehensive unit testing. Additionally, I have integrated GitHub Actions to automate the unit testing workflow in the cloud, ensuring seamless and continuous testing in a modern CI/CD environment.

This apps consumes information data from [openweathermap.org](https://openweathermap.org/) for weather and [newsapi.org](https://newsapi.org/) for covid-19 news.

![Good News](/assets/portfolio/port_personal_good_news_apps_flow.png)<br>

### Technology Used

On building this apps, I use following technology

#### MVVM-Coordinator Architecture
I implement Model-View-ViewModel for every segment information displayed in this apps. Coordinator was used to handle the navigation clearly. See how I manage it inside "Screen" folder which consists of "Home", "NewsList", and "Web".

#### AsyncDisplayKit / Texture
I use [Texture](https://texturegroup.org/) to build the apps User interface. It is easier to handle the layout, thread-safe, and get smooth & responsive user interface.

#### RxSwift
I take the advantage of Observable object in [RxSwift](https://github.com/ReactiveX/RxSwift) together implemented with URLSession and URLRequest to make an API call, instead of implementing Protocol-Delegate or completion handler closure. See my APIService class to see how I build for it. See also inside "Service" folder about the implementation of APIService class to make an API call, handle the request parameter, and also handle the response result. Every ViewModel should consume the Service class to trigger the API call and distribute the result on User Interface.

#### Quick and Nimble
I would like to make my project more robust by Unit-Testing. I implement Quick and Nimble framework to do Unit Test. Just hit cmd + U, and see the test result and the coverage on every ViewModel class. The Service class should be mocked to prevent the Unit Test hit the real API. So, the Service-Interface-Protocol was created, and resulting Service class and MockService class who conforms its Interface-Protocol. Mocking the Service class also make the test coverage more reachable for any test condition.

#### Shimmering / Skeleton
Waiting is boring, right? Making an API call can not be done instantly. It needs time to get the result. While waiting, skeleton view was popularly used in many apps. I implement [FBShimmering](https://github.com/facebookarchive/Shimmer) from facebook to create skeleton view while waiting the apps get the response result from the server.

#### Pagination
List or table is the easiest way to display a lot of data. In this case, the number covid-19 news that was got from [newsapi.org](https://newsapi.org/) was a lot. Then I implemented pagination on the Table Node. On every API call, the apps only fetch 10 datas, then after the Table Node reach the bottom, it will fetch the next 10 datas and so on.

#### Github Action
I setup Github Action Workflows. Just check on "Action" section to check the progress and log. Then, code coverage is reported to [codecov.io](https://codecov.io/).