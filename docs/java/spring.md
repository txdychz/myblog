### 多条件

```java
   @Select("<script>" +
            "SELECT * FROM bsm_driver_health_declaration a " +
            "LEFT JOIN bsm_driver b ON a.BSM_DRIVERID = b.BSM_DRIVERID " +
            "LEFT JOIN bsm_employee c ON c.BSM_EMPLOYEEID = b.SYS_USERID " +
            "WHERE 1=1  and b.BSM_FLEETID = #{fid} " +
            "<if test='date != null and date != \"\"'> " +
            "AND DATE(a.CREATE_TIME) = #{date} " +
            "</if> " +
            "<if test='name != null and name != \"\"'> " +
            "AND c.Name = #{name} " +
            "</if> " +
            "</script>")
```

### 复合类



```java
 @Results(value = {
            @Result(property = "bsmBusCheckid", column = "BSM_BUS_CHECKID"),
            @Result(property = "busCheckDate", column = "BUS_CHECK_DATE"),
            @Result(property = "isBusCheckPass", column = "IS_BUS_CHECK_PASS"),
            @Result(property = "busFaultDescription", column = "BUS_FAULT_DESCRIPTION"),
            @Result(property = "bsmDriverid", column = "BSM_DRIVERID"),
            @Result(property = "details", column = "BSM_BUS_CHECKID" ,many = @Many(select = "com.grp.digitization.bsm.mapper.BsmBusCheckDetailMapper.selectDetailsByCheckId")),
    })


    @Select(
            "SELECT a.*,b.*,c.label as CheckTimeType , d.Name as driverName FROM bsm_bus_check a  left join bsm_driver b on a.BSM_DRIVERID = b.BSM_DRIVERID " +
            "left join sys_dict_item c on  c.dict_id = 265154 left join bsm_employee d on d.BSM_EMPLOYEEID = b.SYS_USERID " +
            " WHERE b.BSM_FLEETID = #{fleetId} and c.value = a.DC_CHECK_TIME_TYPE  and a.CHECK_STATUS in (1,-1)  ORDER BY a.CHECK_STATUS , a.CREATE_TIME DESC")
    List<BsmBusCheckVo> selectCheckListByFleetId(@Param("fleetId") String fleetId );
```

