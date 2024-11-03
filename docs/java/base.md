## 运算符

#### 隐式转换

**byte short char**类型在运算时会发生隐式转换而变成int类型





## 内聚

列表内聚用**List**

```java
public class RouteItem {
    public String path; 
    public String component;
    public String name;
    public String redirect;
    public Boolean hidden;
    public  RouteMeta meta;
    public List<RouteItem> children;
}

```

